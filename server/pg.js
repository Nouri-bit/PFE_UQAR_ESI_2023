const Pool = require('pg').Pool
require('dotenv').config()

const pool = new Pool({
    /*user: process.env.USERNAME,
    password: process.env.PASSWORD,
    host: process.env.HOST,
    port: process.env.DBPORT,*/
    user:'postgres',
    password:'20001999',
    host:'localhost',
    port: 5433,
    database: 'citizen-participation'
})

module.exports = pool