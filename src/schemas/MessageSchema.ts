import { Schema } from 'mongoose'
import type { Document } from 'mongoose'
import type { ThreadType } from './ThreadSchema'


// TODO: Update

let MessageSchema = new Schema({
  body: String,
  timestamp: Number,
  sender: Number,
  thread: { type: Schema.Types.ObjectId, ref: 'threads' },
  deleted: Boolean,
  id: String,
  reply: { type: Schema.Types.ObjectId, ref: 'messages' }
})

MessageSchema.methods.markAsDeleted = function () {
  ; (this as any).deleted = true
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
}

export default MessageSchema
