import { Schema } from 'mongoose'
import { default as MessageSchema } from './MessageSchema'

import type { Document } from 'mongoose'
import type { MessageType } from './MessageSchema'

const unknown = Object

let ThreadSchema = new Schema({
  id: Number,
  name: String,
  members: [unknown],
  messages: [MessageSchema]
})

export interface ThreadType extends Document {
  id: Number
  name: String
  members: any[]
  messages: MessageType[]
}

export default ThreadSchema
