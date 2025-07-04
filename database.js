const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('database.sqlite'); // banco em arquivo para persistência

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    idade INTEGER NOT NULL,
    email TEXT NOT NULL UNIQUE
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS user_configs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    tema TEXT CHECK(tema IN ('dark','medium','light')) NOT NULL,
    notificacoes_email BOOLEAN NOT NULL,
    FOREIGN KEY(user_id) REFERENCES users(id)
  )`);
});

module.exports = db;
