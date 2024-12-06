const express = require('express')
const app = express()

app.use('/', (req, res) => {
  res.send('Hello from backend side :)')
})

const PORT = 3000
app.listen(PORT, () => {
  console.log('Backend Server is Running...')
})
