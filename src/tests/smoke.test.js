const assert = require("assert");
const { connect } = require("../db");
const { router } = require("../routes/auth");

(function run() {
  const db = connect();

  assert.strictEqual(typeof db, "object");
  assert.strictEqual(db.connected, true);
  assert.strictEqual(typeof router, "function");

  console.log("✅ smoke.test.js passed");
})();
