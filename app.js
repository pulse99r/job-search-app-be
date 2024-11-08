const express = require('express')
const app = express()
app.use(express.json())

const db = require('./db/dbConfig.js')
const userController = require('./controllers/userController')

const cors = require('cors')
app.use(cors())

app.use('/users', userController )

app.get('/', (req, res) => {
  res.send (`job-search-app-be`)
})
app.get('*', (req, res) => {
  res.send (`This file is not available!`)
})

module.exports = app;
