const config = {
  url: process.env.DB_URL || "memory://local",
  pool: Number(process.env.DB_POOL || 4),
  connectedAt: null,
};

const store = new Map();

function connect() {
  config.connectedAt = new Date().toISOString();

  return {
    connected: true,
    driver: "memory",
    config,
  };
}

function ensureTable(table) {
  if (!store.has(table)) {
    store.set(table, []);
  }

  return store.get(table);
}

function insert(table, row) {
  const rows = ensureTable(table);
  const record = {
    id: rows.length + 1,
    ...row,
    createdAt: new Date().toISOString(),
  };

  rows.push(record);
  return record;
}

function query(table, predicate = () => true) {
  const rows = store.get(table) || [];
  return rows.filter(predicate);
}

function clear(table) {
  if (table) {
    store.delete(table);
    return;
  }

  store.clear();
}

module.exports = {
  connect,
  query,
  insert,
  clear,
  config,
};
