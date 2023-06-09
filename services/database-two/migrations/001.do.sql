
-- Add SQL in this file to create the database tables for your API
CREATE TABLE IF NOT EXISTS members (
  id INTEGER PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  display_name VARCHAR(255) NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
