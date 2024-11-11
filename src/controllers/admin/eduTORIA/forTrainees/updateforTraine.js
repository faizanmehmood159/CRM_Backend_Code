const forTraineess = require('../../../../models/forTrainees');
require('dotenv').config();

const updateforTrainees = async (req, res) => {
  try {
    const { id } = req.params;
    const { productName, appStore, playStore, keypoints, description } = req.body;

    // Find the existing forTrainees document by ID
    let forTrainees = await forTraineess.findById(id);

    if (!forTrainees) {
      return res.status(404).json({ error: 'Exam preparation not found' });
    }

    // Set the image path if a new image is uploaded
    const baseUrl = process.env.BASE_URL1 || process.env.BASE_URL2 || process.env.BASE_URL3;
    const imagePath = req.files && req.files['image'] ? `${baseUrl}/uploads/${req.files['image'][0].filename}` : null;

    // Update fields if new values are provided
    if (productName) {
      forTrainees.productName = productName;
    }
    if (appStore) {
      forTrainees.appStore = appStore;
    }
    if (playStore) {
      forTrainees.playStore = playStore;
    }
    if (keypoints) {
      forTrainees.keypoints = keypoints;
    }
    if (description) {
      forTrainees.description = description;
    }
    if (imagePath) {
      forTrainees.image = imagePath;
    }

    // Save the updated document
    await forTrainees.save();

    console.log('Exam Preparation Updated:', forTrainees);

    res.status(200).json({
      message: 'Exam preparation updated successfully',
      forTrainees,
    });
  } catch (err) {
    console.error('Error updating exam preparation:', err);
    res.status(500).json({
      error: 'Failed to update exam preparation',
    });
  }
};

module.exports = { updateforTrainees };
