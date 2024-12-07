const mongoose = require('mongoose')
// const employeeCard = require('./employeeCard')
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  cards: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'card'
    }
  ]
})

module.exports = mongoose.model('user', userSchema)
