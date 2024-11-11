const forPupilss = require('../../../../models/forPupils');

const getforPupilss = async (req, res) => {
  try {
    // Retrieve all forPupils documents
    const forPupilssList = await forPupilss.findOne();

    // Check if there are any documents
   

    res.status(200).json(forPupilssList);
  } catch (err) {
    console.error('Error fetching Pupils preparations:', err);
    res.status(500).json({ error: 'Failed to fetch Pupils preparations' });
  }
};

module.exports = { getforPupilss };
