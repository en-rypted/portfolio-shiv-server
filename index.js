const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");
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
  },}));
app.use(bodyParser.json());
const port = process.env.PORT;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL, // Your email
    pass: process.env.PASSWORD, // Your email password or App Password
  },
});

app.post("/send-email", async (req, res) => {
  const { name, email,contact,message } = req.body;

  const mailOptions = {
    from: email,
    to: process.env.EMAIL, // Your email
    subject: `New Contact Message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nContact No: ${contact}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
