const InhouseTrainings = require('../../../../models/InHouseTraining');
require('dotenv').config();

const updateInhouseTraining = async (req, res) => {
  try {
    const { id } = req.params;
    const { productName, appStore, playStore, keypoints, description } = req.body;

    // Find the existing InhouseTraining document by ID
    let InhouseTraining = await InhouseTrainings.findById(id);

    if (!InhouseTraining) {
      return res.status(404).json({ error: 'Inhouse Training  not found' });
    }

    // Set the image path if a new image is uploaded
    const baseUrl = process.env.BASE_URL1 || process.env.BASE_URL2 || process.env.BASE_URL3;
    const imagePath = req.files && req.files['image'] ? `${baseUrl}/uploads/${req.files['image'][0].filename}` : null;

    // Update fields if new values are provided
    if (productName) {
      InhouseTraining.productName = productName;
    }
    if (appStore) {
      InhouseTraining.appStore = appStore;
    }
    if (playStore) {
      InhouseTraining.playStore = playStore;
    }
    if (keypoints) {
      InhouseTraining.keypoints = keypoints;
    }
    if (description) {
      InhouseTraining.description = description;
    }
    if (imagePath) {
      InhouseTraining.image = imagePath;
    }

    // Save the updated document
    await InhouseTraining.save();

    console.log('Inhouse Training  Updated:', InhouseTraining);

    res.status(200).json({
      message: 'Inhouse Training  updated successfully',
      InhouseTraining,
    });
  } catch (err) {
    console.error('Error updating Inhouse Training :', err);
    res.status(500).json({
      error: 'Failed to update Inhouse Training ',
    });
  }
};

module.exports = { updateInhouseTraining };
