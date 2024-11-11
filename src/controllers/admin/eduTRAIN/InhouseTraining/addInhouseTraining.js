const InhouseTrainings = require('../../../../models/InHouseTraining');
const path = require('path');
require('dotenv').config();

const addInhouseTraining = async (req, res) => {
  try {
    const { productName, appStore, playStore, keypoints, description } = req.body;

    const baseUrl = process.env.BASE_URL1 || process.env.BASE_URL2 || process.env.BASE_URL3; 
    const imagePath = req.files && req.files['image'] ? `${baseUrl}/uploads/${req.files['image'][0].filename}` : null;

    const InhouseTraining = new InhouseTrainings({
      productName,
      appStore,
      playStore,
      keypoints,
      description,
      image: imagePath,
    });

    await InhouseTraining.save();
    console.log('Inhouse Trainings Section  Added: ', InhouseTraining);
    res.status(201).json({ message: 'Inhouse Trainings  Section created successfully', InhouseTraining: InhouseTraining });
  } catch (err) {
    console.error('Error creating Inhouse Trainings  Section:', err);
    res.status(500).json({ error: 'Failed to create Inhouse Trainings  Section' });
  }
};

module.exports = { addInhouseTraining };
