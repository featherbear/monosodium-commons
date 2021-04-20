import { Schema } from 'mongoose'
import type { Document } from 'mongoose'
import type { ThreadType } from './ThreadSchema'

// TODO: Update

let MessageSchema = new Schema<MessageType>({
  body: String,
  timestamp: Number,
  sender: Number,
  thread: { type: Schema.Types.ObjectId, ref: 'threads' },
  deleted: Boolean,
  id: String,
  reply: { type: Schema.Types.ObjectId, ref: 'messages' }
})

MessageSchema.methods.markAsDeleted = function () {
  this.deleted = true
  this.save()
}
export interface MessageType extends Document {
  body: String
  timestamp: Number
  sender: Number
  thread: ThreadType
  deleted: Boolean
  id: String
  reply: MessageType

  markAsDeleted()
}

export default MessageSchema
