import * as mongoose from 'mongoose'
import * as Schemas from '../schemas'
import type { MessageType } from '../schemas/MessageSchema'
import type { ThreadType } from '../schemas/ThreadSchema'
import type { UserType } from '../schemas/UserSchema'
import type { UserThreadType } from '../schemas/UserThreadSchema'

require('dotenv').config()

const {
  MONGO_ADDRESS,
  MONGO_USE_AUTH,
  MONGO_USERNAME,
  MONGO_PASSWORD
} = process.env

export const Models = {
  Message: mongoose.model<MessageType>('messages', Schemas.MessageSchema),
  Thread: mongoose.model<ThreadType>('threads', Schemas.ThreadSchema),
  User: mongoose.model<UserType>('users', Schemas.UserSchema),
  UserThread: mongoose.model<UserThreadType>('userThreads', Schemas.UserThreadSchema)
}

export async function doConnect() {
  console.debug(
    `mongodb://${MONGO_USE_AUTH
      ? `${encodeURIComponent(MONGO_USERNAME)}:${encodeURIComponent(
        MONGO_PASSWORD
      )}@`
      : ''
    }${MONGO_ADDRESS}/monosodium`
  )
  return await mongoose.connect(
    `mongodb://${MONGO_USE_AUTH
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
