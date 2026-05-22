const assert = require("assert");
const { connect } = require("../db");

(function run() {
  const db = connect();
  assert.strictEqual(typeof db, "object");
  assert.strictEqual(db.connected, true);
  console.log("✅ smoke.test.js passed");
})();
