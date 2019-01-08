var mongoose = require('mongoose');

var requestSchema = new mongoose.Schema({
  topic: String,
  category: String,
  date: Date,
});

module.exports = mongoose.model('Request', requestSchema);