const Schemas = require('./schemas')
const Mongo = require('./mongo')
module.exports = {
  Schemas,
  Mongo,
  Models: Mongo.Models
}
