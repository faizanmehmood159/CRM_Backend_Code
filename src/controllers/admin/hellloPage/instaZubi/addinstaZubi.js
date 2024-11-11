const instaZubis = require('../../../../models/instaZubi');
const path = require('path');
require('dotenv').config();

const addinstaZubi = async (req, res) => {
  try {
    const { productName, appStore, playStore, keypoints, description } = req.body;

    const baseUrl = process.env.BASE_URL1 || process.env.BASE_URL2 || process.env.BASE_URL3; 
    const imagePath = req.files && req.files['image'] ? `${baseUrl}/uploads/${req.files['image'][0].filename}` : null;

    const instaZubi = new instaZubis({
      productName,
      appStore,
      playStore,
      keypoints,
      description,
      image: imagePath,
    });

    await instaZubi.save();
    console.log('insta Zubi  Section  Added: ', instaZubi);
    res.status(201).json({ message: 'insta Zubi   Section created successfully', instaZubi: instaZubi });
  } catch (err) {
    console.error('Error creating insta Zubi  Section:', err);
    res.status(500).json({ error: 'Failed to create insta Zubi   Section' });
  }
};

module.exports = { addinstaZubi };
