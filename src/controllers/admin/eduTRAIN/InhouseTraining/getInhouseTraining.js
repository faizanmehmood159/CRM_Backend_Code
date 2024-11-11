const InhouseTrainings = require('../../../../models/InHouseTraining');

const getInhouseTrainings = async (req, res) => {
  try {
    // Retrieve all InhouseTraining documents
    const InhouseTrainingsList = await InhouseTrainings.findOne();

    // Check if there are any documents
  
    res.status(200).json(InhouseTrainingsList);
  } catch (err) {
    console.error('Error fetching Inhouse Training :', err);
    res.status(500).json({ error: 'Failed to fetch Inhouse Training ' });
  }
};

module.exports = { getInhouseTrainings };
