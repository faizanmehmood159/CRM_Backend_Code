const forPupilss = require('../../../../models/forPupils');
require('dotenv').config();

const updateforPupils = async (req, res) => {
  try {
    const { id } = req.params;
    const { productName, appStore, playStore, keypoints, description } = req.body;

    // Find the existing forPupils document by ID
    let forPupils = await forPupilss.findById(id);

    if (!forPupils) {
      return res.status(404).json({ error: 'Exam preparation not found' });
    }

    // Set the image path if a new image is uploaded
    const baseUrl = process.env.BASE_URL1 || process.env.BASE_URL2 || process.env.BASE_URL3;
    const imagePath = req.files && req.files['image'] ? `${baseUrl}/uploads/${req.files['image'][0].filename}` : null;

    // Update fields if new values are provided
    if (productName) {
      forPupils.productName = productName;
    }
    if (appStore) {
      forPupils.appStore = appStore;
    }
    if (playStore) {
      forPupils.playStore = playStore;
    }
    if (keypoints) {
      forPupils.keypoints = keypoints;
    }
    if (description) {
      forPupils.description = description;
    }
    if (imagePath) {
      forPupils.image = imagePath;
    }

    // Save the updated document
    await forPupils.save();

    console.log('Exam Preparation Updated:', forPupils);

    res.status(200).json({
      message: 'Exam preparation updated successfully',
      forPupils,
    });
  } catch (err) {
    console.error('Error updating exam preparation:', err);
    res.status(500).json({
      error: 'Failed to update exam preparation',
    });
  }
};

module.exports = { updateforPupils };
