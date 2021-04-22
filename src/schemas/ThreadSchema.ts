import { Schema, Types } from 'mongoose'

import type { Document } from 'mongoose'

const unknown = Object

let ThreadSchema = new Schema<ThreadType>({
  utid: Schema.Types.ObjectId,
  tid: Number,
  name: String,
  members: [unknown],
  messages: [{ type: Schema.Types.ObjectId, ref: 'messages' }],
})

export interface ThreadType extends Document {
  utid: Types.ObjectId
  tid: Number
  name: String
  members: any[]
  messages: Types.ObjectId[]
}

export default ThreadSchema
