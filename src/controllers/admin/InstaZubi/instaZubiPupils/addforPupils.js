const forPupilss = require('../../../../models/forPupils');
const path = require('path');
require('dotenv').config();

const addforPupils = async (req, res) => {
  try {
    const { productName, appStore, playStore, keypoints, description } = req.body;

    const baseUrl = process.env.BASE_URL1 || process.env.BASE_URL2 || process.env.BASE_URL3; 
    const imagePath = req.files && req.files['image'] ? `${baseUrl}/uploads/${req.files['image'][0].filename}` : null;

    const forPupils = new forPupilss({
      productName,
      appStore,
      playStore,
      keypoints,
      description,
      image: imagePath,
    });

    await forPupils.save();
    console.log('Pupils Section  Added: ', forPupils);
    res.status(201).json({ message: 'Pupils Section created successfully', forPupils: forPupils });
  } catch (err) {
    console.error('Error creating Pupils Section:', err);
    res.status(500).json({ error: 'Failed to create Pupils Section' });
  }
};

module.exports = { addforPupils };
