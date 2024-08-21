const sqlite3 = require('sqlite3').verbose();

// Создание и подключение к базе данных
const db = new sqlite3.Database('./users.db');

// Создание таблицы пользователей, если она не существует
db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT)");
});

module.exports = db;
