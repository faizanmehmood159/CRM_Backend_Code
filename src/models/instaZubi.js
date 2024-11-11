const mongoose = require("mongoose");

const instaZubisSchema = new mongoose.Schema({
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

const instaZubis = mongoose.model("instaZubis", instaZubisSchema);

module.exports = instaZubis;
