const newsSecs = require('../../../../models/newsSec');

const getnewsSecs = async (req, res) => {
  try {
    // Retrieve all newsSec documents
    const newsSecsList = await newsSecs.findOne();

 

    res.status(200).json(newsSecsList);
  } catch (err) {
    console.error('Error fetching News Section :', err);
    res.status(500).json({ error: 'Failed to fetch News Section ' });
  }
};

module.exports = { getnewsSecs };
