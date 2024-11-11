const forTraineess = require('../../../../models/forTrainees');

const getforTraineess = async (req, res) => {
  try {
    // Retrieve all forTrainees documents
    const forTraineessList = await forTraineess.findOne();

    // Check if there are any documents
   

    res.status(200).json(forTraineessList);
  } catch (err) {
    console.error('Error fetching exam preparations:', err);
    res.status(500).json({ error: 'Failed to fetch exam preparations' });
  }
};

module.exports = { getforTraineess };
