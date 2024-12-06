const express = require('express')
const app = express()

// note: always write dotenv_require command on top of conn_require command to make it work
require('dotenv').config()
require('./conn/conn')

app.use('/', (req, res) => {
  res.send('Hello from backend side :)')
})

const PORT = 3000
app.listen(PORT, () => {
  console.log('Backend Server is Running...')
})
