const News = require("../../../models/news");

const deleteNews = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedNews = await News.findByIdAndDelete(id);

    if (!deletedNews) {
      console.log('News article not found');
      return res.status(404).json({ error: 'News article not found' });
    }

    console.log('News article deleted successfully:', deletedNews);

    res.status(200).json({
      message: 'News article deleted successfully',
      news: deletedNews,
    });
  } catch (err) {
    console.error('Error deleting news article:', err);
    res.status(500).json({ error: 'Failed to delete news article' });
  }
};

module.exports = { deleteNews };
