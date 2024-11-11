const instaZubiCompanies = require('../../../../models/instaZubiCompanies');
require('dotenv').config();

const updateinstaZubiCompanie = async (req, res) => {
  try {
    const { id } = req.params;
    const { productName, appStore, playStore, keypoints, description } = req.body;

    // Find the existing instaZubiCompanie document by ID
    let instaZubiCompanie = await instaZubiCompanies.findById(id);

    if (!instaZubiCompanie) {
      return res.status(404).json({ error: 'insta Zubi Company  not found' });
    }

    // Set the image path if a new image is uploaded
    const baseUrl = process.env.BASE_URL1 || process.env.BASE_URL2 || process.env.BASE_URL3;
    const imagePath = req.files && req.files['image'] ? `${baseUrl}/uploads/${req.files['image'][0].filename}` : null;

    // Update fields if new values are provided
    if (productName) {
      instaZubiCompanie.productName = productName;
    }
    if (appStore) {
      instaZubiCompanie.appStore = appStore;
    }
    if (playStore) {
      instaZubiCompanie.playStore = playStore;
    }
    if (keypoints) {
      instaZubiCompanie.keypoints = keypoints;
    }
    if (description) {
      instaZubiCompanie.description = description;
    }
    if (imagePath) {
      instaZubiCompanie.image = imagePath;
    }

    // Save the updated document
    await instaZubiCompanie.save();

    console.log('insta Zubi Company  Updated:', instaZubiCompanie);

    res.status(200).json({
      message: 'insta Zubi Company  updated successfully',
      instaZubiCompanie,
    });
  } catch (err) {
    console.error('Error updating insta Zubi Company :', err);
    res.status(500).json({
      error: 'Failed to update insta Zubi Company ',
    });
  }
};

module.exports = { updateinstaZubiCompanie };
