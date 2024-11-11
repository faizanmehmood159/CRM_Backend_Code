const instaZubiCompanies = require('../../../../models/instaZubiCompanies');
const path = require('path');
require('dotenv').config();

const addinstaZubiCompanie = async (req, res) => {
  try {
    const { productName, appStore, playStore, keypoints, description } = req.body;

    const baseUrl = process.env.BASE_URL1 || process.env.BASE_URL2 || process.env.BASE_URL3; 
    const imagePath = req.files && req.files['image'] ? `${baseUrl}/uploads/${req.files['image'][0].filename}` : null;

    const instaZubiCompanie = new instaZubiCompanies({
      productName,
      appStore,
      playStore,
      keypoints,
      description,
      image: imagePath,
    });

    await instaZubiCompanie.save();
    console.log('insta Zubi Company Section  Added: ', instaZubiCompanie);
    res.status(201).json({ message: 'insta Zubi Company  Section created successfully', instaZubiCompanie: instaZubiCompanie });
  } catch (err) {
    console.error('Error creating insta Zubi Company  Section:', err);
    res.status(500).json({ error: 'Failed to create insta Zubi Company  Section' });
  }
};

module.exports = { addinstaZubiCompanie };
