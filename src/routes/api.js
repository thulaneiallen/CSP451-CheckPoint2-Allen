const express = require("express");

const { router: healthRouter } = require("./api/health");
const { router: itemsRouter } = require("./api/items");

const router = express.Router();

router.use("/health", healthRouter);
router.use("/items", itemsRouter);

module.exports = { router };
