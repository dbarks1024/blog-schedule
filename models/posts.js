var mongoose = require("mongoose");

var postSchema = new mongoose.Schema({
  name: String,
  date: Date,
  description: String,
});

module.exports = mongoose.model("Post", postSchema);