const News = require("../../../models/news");

const getNewsById = async (req, res) => {
    try {
        const { id } = req.params;
        const news = await News.findById(id);

        if (!news) {
            console.log('News not found');
            return res.status(404).json({ error: 'News not found' });
        }

        console.log('Retrieved News:', news);
        res.status(200).json(news);
    } catch (err) {
        console.error('Error fetching News information:', err);
        res.status(500).json({ error: 'Failed to fetch News information' });
    }
};

module.exports = { getNewsById };
