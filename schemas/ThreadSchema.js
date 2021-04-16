const mongoose = require('mongoose')
const MessageSchema = require('./MessageSchema')
const unknown = Object

let ThreadSchema = new mongoose.Schema({
  id: Number,
  name: String,
  members: [unknown],
  messages: [MessageSchema]
})


module.exports = ThreadSchema
