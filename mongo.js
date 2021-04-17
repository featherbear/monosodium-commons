require('dotenv').config()
const mongoose = require('mongoose')
const Schemas = require('./schemas')

const {
  MONGO_ADDRESS,
  MONGO_DATABASE,
  MONGO_USE_AUTH,
  MONGO_USERNAME,
  MONGO_PASSWORD
} = process.env

module.exports = {
  Models: {
    Message: mongoose.model('messages', Schemas.MessageSchema),
    Thread: mongoose.model('threads', Schemas.ThreadSchema),
    User: mongoose.model('users', Schemas.UserSchema),
    UserThread: mongoose.model('userThreads', Schemas.UserThreadSchema)
  },
  doConnect () {
    mongoose.connect(
      `mongodb://${
        MONGO_USE_AUTH
          ? `${encodeURIComponent(MONGO_USERNAME)}:${encodeURIComponent(
              MONGO_PASSWORD
            )}@`
          : ''
      }${MONGO_ADDRESS}/monosodium`,
      {
        authSource: 'admin',
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
      }
    )
  }
}
