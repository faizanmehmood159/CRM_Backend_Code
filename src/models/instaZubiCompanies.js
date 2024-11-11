const mongoose = require("mongoose");

const instaZubiCompaniesSchema = new mongoose.Schema({
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

const instaZubiCompanies = mongoose.model("instaZubiCompanies", instaZubiCompaniesSchema);

module.exports = instaZubiCompanies;
