const mongoose = require('mongoose')

const Schemas = require('./schemas')

module.exports = {
  Message: mongoose.model('messages', Schemas.MessageSchema),
  Thread: mongoose.model('threads', Schemas.ThreadSchema)
}
