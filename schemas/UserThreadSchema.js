const { Schema } = require('mongoose')
const ThreadSchema = require('./ThreadSchema')

let UserThreadSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'users' },
  threads: [ThreadSchema]
})

module.exports = UserThreadSchema
