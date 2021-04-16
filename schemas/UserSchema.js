const { Schema } = require('mongoose')
const unknown = Object

let UserSchema = new Schema({
  MSG_AUTH: {
    username: { type: String, unique: true, index: true },
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
