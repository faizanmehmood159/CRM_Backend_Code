const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
  heading: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  authorName: { type: String, required: true },
  date: { type: Date, default: Date.now },
  categories: {
    type: [String],
    required: true,
  },
});

module.exports = mongoose.model('News', newsSchema);
