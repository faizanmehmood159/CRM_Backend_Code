const News = require("../../../models/news");
require('dotenv').config();

const updateNews = async (req, res) => {
  try {
    const { id } = req.params;
    const { heading, authorName, description, categories } = req.body;

    // Find the existing News document by ID
    let newsItem = await News.findById(id);

    if (!newsItem) {
      return res.status(404).json({ error: 'News not found' });
    }

    // Set the image path if a new image is uploaded
    const baseUrl = process.env.BASE_URL1 || process.env.BASE_URL2 || process.env.BASE_URL3;
    const imagePath = req.files && req.files['image'] 
      ? `${baseUrl}/uploads/${req.files['image'][0].filename}`
      : null;

    // Update fields if new values are provided
    if (heading) newsItem.heading = heading;
    if (authorName) newsItem.authorName = authorName;
    if (description) newsItem.description = description;
    if (categories) newsItem.categories = categories;
    if (imagePath) newsItem.image = imagePath;

    // Save the updated document
    await newsItem.save();

    console.log('News Section Updated:', newsItem);

    res.status(200).json({
      message: 'News Section updated successfully',
      newsItem,
    });
  } catch (err) {
    console.error('Error updating News Section:', err);
    res.status(500).json({
      error: 'Failed to update News Section',
    });
  }
};

module.exports = { updateNews };
