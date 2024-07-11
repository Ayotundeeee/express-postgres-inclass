const express = require('express')
const app = express()
const cors = require('cors')
const colorsController = require('./controllers/colorsController')

app.use(express.json())
app.use(cors())
app.use('/colors', colorsController)

app.get('/', (req, res) => {
    res.send("Welcome to Colors App!")
})

module.exports = app