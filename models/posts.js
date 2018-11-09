var mongoose = require('mongoose');

var postSchema = new mongoose.Schema({
  name: String,
  date: Date,
  description: String,
  category: {
    name: String,
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category'
    }
  }
});

module.exports = mongoose.model('Post', postSchema);