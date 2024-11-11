const News = require("../../../models/news");

const getNews = async (req, res) => {
  try {
    // Fetch only the specified fields
    const newsArticles = await News.find({}, 'id heading image authorName date');
    console.log('Retrieved News Articles:', newsArticles);
    res.status(200).json(newsArticles);
  } catch (err) {
    console.error('Error fetching News information:', err);
    res.status(500).json({ error: 'Failed to fetch News information' });
  }
};

module.exports = { getNews };