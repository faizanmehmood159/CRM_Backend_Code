const examPreparations = require('../../../../models/examPreparation');

const getExamPreparations = async (req, res) => {
  try {
    // Retrieve all examPreparation documents
    const examPreparationsList = await examPreparations.findOne();

    // Check if there are any documents
   

    res.status(200).json(examPreparationsList);
  } catch (err) {
    console.error('Error fetching exam preparations:', err);
    res.status(500).json({ error: 'Failed to fetch exam preparations' });
  }
};

module.exports = { getExamPreparations };
