const furtherTrainings = require('../../../../models/furtherTraining');
require('dotenv').config();

const updatefurtherTraining = async (req, res) => {
  try {
    const { id } = req.params;
    const { productName, appStore, playStore, keypoints, description } = req.body;

    // Find the existing furtherTraining document by ID
    let furtherTraining = await furtherTrainings.findById(id);

    if (!furtherTraining) {
      return res.status(404).json({ error: 'Further Training  not found' });
    }

    // Set the image path if a new image is uploaded
    const baseUrl = process.env.BASE_URL1 || process.env.BASE_URL2 || process.env.BASE_URL3;
    const imagePath = req.files && req.files['image'] ? `${baseUrl}/uploads/${req.files['image'][0].filename}` : null;

    // Update fields if new values are provided
    if (productName) {
      furtherTraining.productName = productName;
    }
    if (appStore) {
      furtherTraining.appStore = appStore;
    }
    if (playStore) {
      furtherTraining.playStore = playStore;
    }
    if (keypoints) {
      furtherTraining.keypoints = keypoints;
    }
    if (description) {
      furtherTraining.description = description;
    }
    if (imagePath) {
      furtherTraining.image = imagePath;
    }

    // Save the updated document
    await furtherTraining.save();

    console.log('Further Training  Updated:', furtherTraining);

    res.status(200).json({
      message: 'Further Training  updated successfully',
      furtherTraining,
    });
  } catch (err) {
    console.error('Error updating Further Training :', err);
    res.status(500).json({
      error: 'Failed to update Further Training ',
    });
  }
};

module.exports = { updatefurtherTraining };
