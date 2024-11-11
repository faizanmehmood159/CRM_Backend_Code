const newsSecs = require('../../../../models/newsSec');
require('dotenv').config();

const addnewsSec = async (req, res) => {
  try {
    const { productName, keypoints, description } = req.body;
    const newsSec = new newsSecs({
      productName,
      keypoints,
      description,
     
    });

    await newsSec.save();
    console.log('News Section Added:', newsSec);
    res.status(201).json({ message: 'News created successfully', newsSec });
  } catch (err) {
    console.error('Error creating News:', err);
    res.status(500).json({ error: 'Failed to create News' });
  }
};

module.exports = { addnewsSec };
