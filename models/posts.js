var mongoose = require('mongoose');

var postSchema = new mongoose.Schema({
  title: String,
  date: Date,
  description: String,
  author: String,
  status: String,
  category: String,
});

module.exports = mongoose.model('Post', postSchema);