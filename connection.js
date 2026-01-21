var mysql = require("mysql2");
var util = require("util");

var conn = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"msd_news"
});


const exe = util.promisify(conn.query).bind(conn);

module.exports = exe;

