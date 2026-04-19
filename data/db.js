require("dotenv").config();

const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "my-db-username",
  password: process.env.DB_PASSWORD || "my-secret-password",
  database: process.env.DB_NAME || "my-db-name",
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err.message);
    return;
  }
  console.log("Connected to MySQL!");
});

module.exports = connection;
