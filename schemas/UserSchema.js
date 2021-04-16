const mongoose = require('mongoose')
const unknown = Object

let UserSchema = new mongoose.Schema({
  MSG_AUTH: {
    username: String,
    password: Buffer, // crypto
    sessions: [unknown]
  },
  FB_AUTH: {
    uid: Number,
    session: unknown
  },
  SETTINGS: unknown,
  QUEUE: [unknown]
})

module.exports = UserSchema
