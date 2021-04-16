const mongoose = require('mongoose')

const Schemas = require('./schemas')

module.exports = {
  Message: mongoose.model('messages', Schemas.MessageSchema),
  Thread: mongoose.model('threads', Schemas.ThreadSchema),
  UserThread: mongoose.model('userThreads', Schemas.UserThreadSchema)
  User: mongoose.model('users', Schemas.UserSchema)
}
