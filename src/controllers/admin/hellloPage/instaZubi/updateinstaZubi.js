const instaZubis = require('../../../../models/instaZubi');
require('dotenv').config();

const updateinstaZubi = async (req, res) => {
  try {
    const { id } = req.params;
    const { productName, appStore, playStore, keypoints, description } = req.body;

    // Find the existing instaZubi document by ID
    let instaZubi = await instaZubis.findById(id);

    if (!instaZubi) {
      return res.status(404).json({ error: 'insta Zubi   not found' });
    }

    // Set the image path if a new image is uploaded
    const baseUrl = process.env.BASE_URL1 || process.env.BASE_URL2 || process.env.BASE_URL3;
    const imagePath = req.files && req.files['image'] ? `${baseUrl}/uploads/${req.files['image'][0].filename}` : null;

    // Update fields if new values are provided
    if (productName) {
      instaZubi.productName = productName;
    }
    if (appStore) {
      instaZubi.appStore = appStore;
    }
    if (playStore) {
      instaZubi.playStore = playStore;
    }
    if (keypoints) {
      instaZubi.keypoints = keypoints;
    }
    if (description) {
      instaZubi.description = description;
    }
    if (imagePath) {
      instaZubi.image = imagePath;
    }

    // Save the updated document
    await instaZubi.save();

    console.log('insta Zubi   Updated:', instaZubi);

    res.status(200).json({
      message: 'insta Zubi   updated successfully',
      instaZubi,
    });
  } catch (err) {
    console.error('Error updating insta Zubi  :', err);
    res.status(500).json({
      error: 'Failed to update insta Zubi  ',
    });
  }
};

module.exports = { updateinstaZubi };
