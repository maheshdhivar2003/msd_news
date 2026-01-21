var mysql = require("mysql2");
var util = require("util");

var conn = mysql.createConnection({
    host:"buygfdscm6kcgbgaat5f-mysql.services.clever-cloud.com",
    user:"um8qugngi6x4ufbu",
    password:"9NfLEjOtJMMCtLMK2pxH",
    database:"buygfdscm6kcgbgaat5f",
    port:"3306"
});


const exe = util.promisify(conn.query).bind(conn);

module.exports = exe;

