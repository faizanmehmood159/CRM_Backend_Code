const furtherTrainings = require('../../../../models/furtherTraining');

const getfurtherTrainings = async (req, res) => {
  try {
    // Retrieve all furtherTraining documents
    const furtherTrainingsList = await furtherTrainings.findOne();

 

    res.status(200).json(furtherTrainingsList);
  } catch (err) {
    console.error('Error fetching Further Training :', err);
    res.status(500).json({ error: 'Failed to fetch Further Training ' });
  }
};

module.exports = { getfurtherTrainings };
