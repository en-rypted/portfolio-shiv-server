const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const contactLimiter = require('./middleware/contactLimiter');
const cookieParser = require("cookie-parser");
const { emailTemplate } = require("./assets/emailTemplate");
require("dotenv").config();
const allowedOrigins = [
  "https://shiv-portfolio-47ce9.web.app",
  "http://localhost:5173", // For local development
];


const app = express();
app.use(cors({
  origin: function (origin, callback) {
    console.log(origin)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true 
}));
app.use(express.json());

 app.use(cookieParser());

const port = process.env.PORT;



const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL, // Your email
    pass: process.env.PASSWORD, // Your email password or App Password
  },
});

app.post("/send-email", contactLimiter, async (req, res) => {
  const { name, email, contact, message } = req.body;
  
  // Email to yourself
  const mailOptions = {
    from: email,
    to: process.env.EMAIL, // Your email
    subject: `New Contact Message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nContact No: ${contact}\nMessage: ${message}`,
  };

  // Thank you email to the user
  const userMailOptions = {
    from: process.env.EMAIL, // Your email
    to: email, // User's email
    subject: "Thanks for contacting me!",
    html: emailTemplate(name),
  };

  try {
    await transporter.sendMail(mailOptions); // Send to yourself
    await transporter.sendMail(userMailOptions); // Send to user
    res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
