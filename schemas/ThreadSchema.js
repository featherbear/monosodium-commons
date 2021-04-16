const mongoose = require('mongoose')

let ThreadSchema = new mongoose.Schema({
  id: Number,
  name: String,
  members: [Number]
})


module.exports = ThreadSchema
