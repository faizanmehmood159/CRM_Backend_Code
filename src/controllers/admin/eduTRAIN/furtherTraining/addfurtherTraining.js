const furtherTrainings = require('../../../../models/furtherTraining');
const path = require('path');
require('dotenv').config();

const addfurtherTraining = async (req, res) => {
  try {
    const { productName, appStore, playStore, keypoints, description } = req.body;

    const baseUrl = process.env.BASE_URL1 || process.env.BASE_URL2 || process.env.BASE_URL3; 
    const imagePath = req.files && req.files['image'] ? `${baseUrl}/uploads/${req.files['image'][0].filename}` : null;

    const furtherTraining = new furtherTrainings({
      productName,
      appStore,
      playStore,
      keypoints,
      description,
      image: imagePath,
    });

    await furtherTraining.save();
    console.log('Further Training Section  Added: ', furtherTraining);
    res.status(201).json({ message: 'Further Training  Section created successfully', furtherTraining: furtherTraining });
  } catch (err) {
    console.error('Error creating Further Training  Section:', err);
    res.status(500).json({ error: 'Failed to create Further Training  Section' });
  }
};

module.exports = { addfurtherTraining };
