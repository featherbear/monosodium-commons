const { Schema } = require('mongoose')
const MessageSchema = require('./MessageSchema')
const unknown = Object

let ThreadSchema = new Schema({
  id: Number,
  name: String,
  members: [unknown],
  messages: [MessageSchema]
})

module.exports = ThreadSchema
