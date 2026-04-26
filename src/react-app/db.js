const Database = require('better-sqlite3');
const path = require('path');
const db = new Database(path.join(__dirname, 'frah_spaces.db'));

// Initialize tables for Construction Projects and Blog Posts
db.exec(`
  CREATE TABLE IF NOT EXISTS projects (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    category TEXT,
    location TEXT,
    year TEXT,
    description TEXT,
    client TEXT,
    story TEXT,
    image TEXT
  );

  CREATE TABLE IF NOT EXISTS blog_posts (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    author TEXT,
    category TEXT,
    date TEXT,
    excerpt TEXT,
    content TEXT, -- JSON string of sections
    image TEXT
  );

  CREATE TABLE IF NOT EXISTS material_estimates (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    project_type TEXT,
    calculation_data TEXT
  );
`);

module.exports = db;