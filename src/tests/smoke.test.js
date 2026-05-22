const assert = require("assert");
const { connect } = require("../db");
const { router } = require("../routes/api");
const { validateItemInput } = require("../routes/api/items");

(function run() {
  const db = connect();

  assert.strictEqual(typeof db, "object");
  assert.strictEqual(db.connected, true);
  assert.strictEqual(typeof router, "function");

  const missingNameErrors = validateItemInput({});
  assert.ok(missingNameErrors.includes("Item name is required."));

  const validErrors = validateItemInput({
    name: "Notebook",
    quantity: 2,
  });

  assert.strictEqual(validErrors.length, 0);

  console.log("✅ smoke.test.js passed");
})();
