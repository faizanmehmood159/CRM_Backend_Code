const forCompanies = require('../../../../models/forCompanies');
require('dotenv').config();

const updateforCompanie = async (req, res) => {
  try {
    const { id } = req.params;
    const { productName, appStore, playStore, keypoints, description } = req.body;

    // Find the existing forCompanie document by ID
    let forCompanie = await forCompanies.findById(id);

    if (!forCompanie) {
      return res.status(404).json({ error: 'Further Training  not found' });
    }

    // Set the image path if a new image is uploaded
    const baseUrl = process.env.BASE_URL1 || process.env.BASE_URL2 || process.env.BASE_URL3;
    const imagePath = req.files && req.files['image'] ? `${baseUrl}/uploads/${req.files['image'][0].filename}` : null;

    // Update fields if new values are provided
    if (productName) {
      forCompanie.productName = productName;
    }
    if (appStore) {
      forCompanie.appStore = appStore;
    }
    if (playStore) {
      forCompanie.playStore = playStore;
    }
    if (keypoints) {
      forCompanie.keypoints = keypoints;
    }
    if (description) {
      forCompanie.description = description;
    }
    if (imagePath) {
      forCompanie.image = imagePath;
    }

    // Save the updated document
    await forCompanie.save();

    console.log('Further Training  Updated:', forCompanie);

    res.status(200).json({
      message: 'Further Training  updated successfully',
      forCompanie,
    });
  } catch (err) {
    console.error('Error updating Further Training :', err);
    res.status(500).json({
      error: 'Failed to update Further Training ',
    });
  }
};

module.exports = { updateforCompanie };
