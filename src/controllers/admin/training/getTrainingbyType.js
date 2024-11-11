const Training = require('../../../models/training');

const getTrainingbyType = async (req, res) => {
  try {
    // Extract the trainingType from the request body
    const { trainingType } = req.body;

    // Find records that match the specified trainingType
    const training = await Training.find({ trainingType: trainingType });

    // Check if any records were found
    if (training.length === 0) {
      return res.status(404).json({ message: 'No records found for the specified training type' });
    }

    console.log('Retrieved Training:', training);

    // Return the filtered training records
    res.status(200).json(training);
  } catch (err) {
    console.error('Error fetching Training information:', err);
    res.status(500).json({ error: 'Failed to fetch Training information' });
  }
};

module.exports = { getTrainingbyType };
