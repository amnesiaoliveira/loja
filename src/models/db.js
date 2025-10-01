const mysql = require('mysql2/promise');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Eu@1594870263',
    port: 3306,
    database: 'crud'

});

module.exports = db;