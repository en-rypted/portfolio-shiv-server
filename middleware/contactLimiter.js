function contactLimiter(req, res, next) {
  if (req.path === "/send-email") {
    let count = parseInt(req.cookies.contactCount || "0", 10);
    if (count >= 5) {
      return res.status(429).json({ success: false, message: "Submission limit reached. Try again after 24 hours." });
    }
    // Increment count and set cookie with 24h expiry
    res.cookie("contactCount", count + 1, {
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
      httpOnly: false,
      sameSite: "lax",
      secure: true,
    });
  }
  next();
}

module.exports = contactLimiter;