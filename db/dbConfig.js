const pgp = require('pg-promise')()

require('dotenv').config()


//PG_PASSWORD  does not exist locally, but it does exist and is required on Render when we deploy. So we add it to our 'cn' objet so the production environment can find it and use it.
const cn ={
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    user: process.env.PG_USER,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD
}

const db = pgp(cn)

module.exports = db