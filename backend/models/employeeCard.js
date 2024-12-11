const mongoose = require('mongoose')

const cardSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    role: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    status: {
      type: String,
      required: true,
      enum: ['Active', 'In-Active'], // Enforce predefined choices
      default: 'In-Active'
    },
    department: {
      type: String,
      required: true
    }
  },
  { timestamps: true } // Adds createdAt and updatedAt fields
)

module.exports = mongoose.model('Card', cardSchema)
