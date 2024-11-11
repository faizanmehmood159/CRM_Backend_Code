const mongoose = require('mongoose');

const newsSecSchema = new mongoose.Schema({

  productName: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },
  keypoints: {
    type: [String],
    required: true,
  },
});


module.exports = mongoose.model('newsSec', newsSecSchema);
