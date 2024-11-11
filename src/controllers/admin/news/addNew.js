const News = require("../../../models/news");
const path = require("path");
require("dotenv").config();

const addNews = async (req, res) => {
  try {
    const { heading, description, authorName, categories } = req.body;

    const baseUrl =
      process.env.BASE_URL1 || process.env.BASE_URL2 || process.env.BASE_URL3;
    const imagePath = req.files["image"]
      ? `${baseUrl}/uploads/${req.files["image"][0].filename}`
      : null;

    const newNews = new News({
      heading: heading,
      description: description,
      authorName: authorName,
      categories: categories,
      image: imagePath,
    });

    await newNews.save();
    console.log("News added: ", newNews);

    res.status(201).json({
      message: "News added successfully",
      // imageURL: imagePath,
    });
  } catch (err) {
    console.error("Error saving News:", err);
    res.status(500).json({ error: "Failed to save News" });
  }
};

module.exports = { addNews };
