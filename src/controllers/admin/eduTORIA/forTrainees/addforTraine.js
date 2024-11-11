const forTraineess = require('../../../../models/forTrainees');
const path = require('path');
require('dotenv').config();

const addforTrainees = async (req, res) => {
  try {
    const { productName, appStore, playStore, keypoints, description } = req.body;

    const baseUrl = process.env.BASE_URL1 || process.env.BASE_URL2 || process.env.BASE_URL3; 
    const imagePath = req.files && req.files['image'] ? `${baseUrl}/uploads/${req.files['image'][0].filename}` : null;

    const forTrainees = new forTraineess({
      productName,
      appStore,
      playStore,
      keypoints,
      description,
      image: imagePath,
    });

    await forTrainees.save();
    console.log('Exam Section  Added: ', forTrainees);
    res.status(201).json({ message: 'Exam Section created successfully', forTrainees: forTrainees });
  } catch (err) {
    console.error('Error creating Exam Section:', err);
    res.status(500).json({ error: 'Failed to create Exam Section' });
  }
};

module.exports = { addforTrainees };
