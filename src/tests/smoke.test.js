const assert = require("assert");
const { connect, insert, query, clear } = require("../db");
const { router: authRouter } = require("../routes/auth");
const { router: apiRouter } = require("../routes/api");
const { validateItemInput } = require("../routes/api/items");

(function run() {
  const db = connect();

  assert.strictEqual(typeof db, "object");
  assert.strictEqual(db.connected, true);
  assert.strictEqual(db.driver, "memory");

  assert.strictEqual(typeof authRouter, "function");
  assert.strictEqual(typeof apiRouter, "function");

  clear("users");

  const user = insert("users", {
    email: "student@example.com",
    role: "tester",
  });

  assert.strictEqual(user.id, 1);
  assert.strictEqual(user.email, "student@example.com");

  const users = query("users", (row) => row.role === "tester");

  assert.strictEqual(users.length, 1);
  assert.strictEqual(users[0].email, "student@example.com");

  const missingNameErrors = validateItemInput({});
  assert.ok(missingNameErrors.includes("Item name is required."));

  const validErrors = validateItemInput({
    name: "Notebook",
    quantity: 2,
  });

  assert.strictEqual(validErrors.length, 0);

  console.log("✅ smoke.test.js passed");
})();
