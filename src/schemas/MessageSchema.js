const mongoose = require('mongoose')
const ThreadSchema = require('./ThreadSchema')

const Schema = mongoose.Schema;
let MessageSchema = new mongoose.Schema({
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

module.exports = MessageSchema
