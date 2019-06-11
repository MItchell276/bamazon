const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    database: "bamazon_db",
    user: "root",
    password: "root"
});