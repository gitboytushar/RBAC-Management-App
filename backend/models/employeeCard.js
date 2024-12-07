// const { timeStamp } = require('console')
const mongoose = require('mongoose')
const cardSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    //   status: {
    //     type: String,
    //     required: true
    //   },

    role: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    active: {
      type: boolean,
      default: false
    },
    department: {
      type: String,
      required: true
    }
  },
  { timestamps: true } // to save the card creation timestamp for futher use in algorithms
)

module.exports = mongoose.model('card', cardSchema)
