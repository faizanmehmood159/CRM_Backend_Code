const forCompanies = require('../../../../models/forCompanies');
const path = require('path');
require('dotenv').config();

const addforCompanie = async (req, res) => {
  try {
    const { productName, appStore, playStore, keypoints, description } = req.body;

    const baseUrl = process.env.BASE_URL1 || process.env.BASE_URL2 || process.env.BASE_URL3; 
    const imagePath = req.files && req.files['image'] ? `${baseUrl}/uploads/${req.files['image'][0].filename}` : null;

    const forCompanie = new forCompanies({
      productName,
      appStore,
      playStore,
      keypoints,
      description,
      image: imagePath,
    });

    await forCompanie.save();
    console.log('Further Training Section  Added: ', forCompanie);
    res.status(201).json({ message: 'Further Training  Section created successfully', forCompanie: forCompanie });
  } catch (err) {
    console.error('Error creating Further Training  Section:', err);
    res.status(500).json({ error: 'Failed to create Further Training  Section' });
  }
};

module.exports = { addforCompanie };
