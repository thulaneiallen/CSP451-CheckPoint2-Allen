const express = require("express");

const router = express.Router();

const items = [];

function validateItemInput(body) {
  const errors = [];

  if (!body.name || typeof body.name !== "string") {
    errors.push("Item name is required.");
  }

  if (body.name && body.name.trim().length < 2) {
    errors.push("Item name must be at least 2 characters.");
  }

  if (body.quantity !== undefined && Number(body.quantity) < 1) {
    errors.push("Quantity must be at least 1.");
  }

  return errors;
}

router.get("/", (req, res) => {
  res.json({
    count: items.length,
    items,
  });
});

router.post("/", (req, res) => {
  const errors = validateItemInput(req.body);

  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }

  const item = {
    id: items.length + 1,
    name: req.body.name.trim(),
    quantity: Number(req.body.quantity || 1),
    createdAt: new Date().toISOString(),
  };

  items.push(item);

  return res.status(201).json({
    message: "Item created.",
    item,
  });
});

module.exports = { router, validateItemInput };
