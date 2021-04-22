import { Schema, Types } from 'mongoose'
import { default as ThreadSchema } from './ThreadSchema'

import type { Document } from 'mongoose'
import type { ThreadType } from './ThreadSchema'

let UserThreadSchema = new Schema<UserThreadType>({
  user: { type: Schema.Types.ObjectId, ref: 'users' },
  threads: [ThreadSchema]
})

export interface UserThreadType extends Document {
  user: Types.ObjectId
  threads: ThreadType[]
}

export default UserThreadSchema
