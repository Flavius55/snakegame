const Pool = require("pg").Pool;
require("dotenv").config();

const pool = new Pool({
    host:"localhost",
    user:"postgres",
    password:process.env.pas,
    database:"snake",
    port:"5432"
});

module.exports = pool;