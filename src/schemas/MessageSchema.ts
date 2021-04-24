import { Schema, Types } from 'mongoose'
import type { Document } from 'mongoose'

// TODO: Update

let MessageSchema = new Schema<MessageType>({
  body: String,
  timestamp: Number,
  sender: Number,
  thread: { type: Schema.Types.ObjectId, ref: 'threads' },
  deleted: Number,
  mid: String,
  reply: { type: Schema.Types.ObjectId, ref: 'messages' }
})

export interface MessageType extends Document {
  body: String
  timestamp: Number // Date?
  sender: Number
  thread: Types.ObjectId
  mid: String
  deleted?: Number // Date
  reply?: Types.ObjectId
}

export default MessageSchema
