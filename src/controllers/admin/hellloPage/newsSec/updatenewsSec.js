const newsSecs = require('../../../../models/newsSec');
require('dotenv').config();

const updatenewsSec = async (req, res) => {
  try {
    const { id } = req.params;
    const { productName, keypoints, description } = req.body;

    // Find the existing newsSec document by ID
    let newsSec = await newsSecs.findById(id);

    if (!newsSec) {
      return res.status(404).json({ error: 'Further Training not found' });
    }

    if (productName) {
      newsSec.productName = productName;
    }
    if (keypoints) {
      newsSec.keypoints = keypoints;
    }
    if (description) {
      newsSec.description = description;
    }

    await newsSec.save();

    console.log('Further Training Updated:', newsSec);
    const responseObject = {
      id: newsSec._id,
      productName: newsSec.productName,
      keypoints: newsSec.keypoints,
      description: newsSec.description
     
    };

    res.status(200).json({
      message: 'Further Training updated successfully',
      newsSec: responseObject,
    });
  } catch (err) {
    console.error('Error updating Further Training:', err);
    res.status(500).json({
      error: 'Failed to update Further Training',
    });
  }
};

module.exports = { updatenewsSec };
