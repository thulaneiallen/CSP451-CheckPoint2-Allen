const express = require("express");

const router = express.Router();

function validateLoginInput(email, password) {
  const errors = [];

  if (!email || typeof email !== "string") {
    errors.push("Email is required.");
  }

  if (!password || typeof password !== "string") {
    errors.push("Password is required.");
  }

  if (typeof password === "string" && password.length < 6) {
    errors.push("Password must be at least 6 characters.");
  }

  return errors;
}

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  const errors = validateLoginInput(email, password);

  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }

  return res.json({
    authenticated: true,
    message: "Login accepted by authentication stub.",
    user: {
      email,
    },
  });
});

module.exports = { router };
