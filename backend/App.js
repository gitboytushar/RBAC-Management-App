const express = require('express')
const app = express()

// note: always write dotenv require command "on top of conn require command" to make it work
require('dotenv').config()
require('./conn/conn')

// to use custom sign-in api
const cors = require('cors')
const UserAPI = require('./routes/userAuth')
const CardAPI = require('./routes/eCard')

app.use(cors())
app.use(express.json()) // very important to mention data format like this, to send and receive data with api response

app.use('/api/v1', UserAPI)
// on this url -> localhost:3000/api/v1/sign-in -> it fetches given data

app.use('/api/v2', CardAPI) // api endpoint to create-card

app.use('/', (req, res) => {
  res.send('Hello from backend side :)')
})

const PORT = 3000

app.listen(PORT, () => {
  console.log('Server is Running...')
})
