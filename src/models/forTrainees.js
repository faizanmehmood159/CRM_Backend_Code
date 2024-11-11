const mongoose = require("mongoose");

const forTraineesSchema = new mongoose.Schema({
  image: {
    type: String,
    require: true,
  },
  productName: {
    type: String,
    required: true,
  },
  appStore: {
    type: String,
    required: true,
  },
  playStore: {
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

const forTrainees = mongoose.model("forTrainees", forTraineesSchema);

module.exports = forTrainees;
