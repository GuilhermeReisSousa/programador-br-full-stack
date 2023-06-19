const mongoose = require('mongoose')

const searchSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  url: { type: String, required: true },
  click: { type: Number, default: 0 },
});

module.exports = mongoose.model("links", searchSchema);