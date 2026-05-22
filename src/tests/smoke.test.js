const assert = require("assert");
const { connect } = require("../db");
const { router: authRouter } = require("../routes/auth");
const { router: apiRouter } = require("../routes/api");
const { validateItemInput } = require("../routes/api/items");

(function run() {
  const db = connect();

  assert.strictEqual(typeof db, "object");
  assert.strictEqual(db.connected, true);

  assert.strictEqual(typeof authRouter, "function");
  assert.strictEqual(typeof apiRouter, "function");

  const missingNameErrors = validateItemInput({});
  assert.ok(missingNameErrors.includes("Item name is required."));

  const validErrors = validateItemInput({
    name: "Notebook",
    quantity: 2,
  });

  assert.strictEqual(validErrors.length, 0);

  console.log("✅ smoke.test.js passed");
})();
