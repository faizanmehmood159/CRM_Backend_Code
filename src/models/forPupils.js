const mongoose = require("mongoose");

const forPupilsSchema = new mongoose.Schema({
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

const forPupils = mongoose.model("forPupils", forPupilsSchema);

module.exports = forPupils;
