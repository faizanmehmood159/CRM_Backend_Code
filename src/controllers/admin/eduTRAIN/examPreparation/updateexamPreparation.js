const examPreparations = require('../../../../models/examPreparation');
require('dotenv').config();

const updateExamPreparation = async (req, res) => {
  try {
    const { id } = req.params;
    const { productName, appStore, playStore, keypoints, description } = req.body;

    // Find the existing examPreparation document by ID
    let examPreparation = await examPreparations.findById(id);

    if (!examPreparation) {
      return res.status(404).json({ error: 'Exam preparation not found' });
    }

    // Set the image path if a new image is uploaded
    const baseUrl = process.env.BASE_URL1 || process.env.BASE_URL2 || process.env.BASE_URL3;
    const imagePath = req.files && req.files['image'] ? `${baseUrl}/uploads/${req.files['image'][0].filename}` : null;

    // Update fields if new values are provided
    if (productName) {
      examPreparation.productName = productName;
    }
    if (appStore) {
      examPreparation.appStore = appStore;
    }
    if (playStore) {
      examPreparation.playStore = playStore;
    }
    if (keypoints) {
      examPreparation.keypoints = keypoints;
    }
    if (description) {
      examPreparation.description = description;
    }
    if (imagePath) {
      examPreparation.image = imagePath;
    }

    // Save the updated document
    await examPreparation.save();

    console.log('Exam Preparation Updated:', examPreparation);

    res.status(200).json({
      message: 'Exam preparation updated successfully',
      examPreparation,
    });
  } catch (err) {
    console.error('Error updating exam preparation:', err);
    res.status(500).json({
      error: 'Failed to update exam preparation',
    });
  }
};

module.exports = { updateExamPreparation };
