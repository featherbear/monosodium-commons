import { Schema } from 'mongoose'
import type { Document } from 'mongoose'

const unknown = Object

let UserSchema = new Schema<UserType>({
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

export interface UserType extends Document {
  MSG_AUTH: {
    username: String
    password: Buffer // crypto
    sessions: any[]
  }
  FB_AUTH: {
    uid: Number
    session: any
  }
  SETTINGS: any
  QUEUE: any[]
}

export default UserSchema
