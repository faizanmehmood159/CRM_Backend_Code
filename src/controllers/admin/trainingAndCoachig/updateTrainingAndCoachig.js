const TrainingAndCoachig = require("../../../models/trainingAndCoachig");
const path = require("path");
require('dotenv').config();

const updateTrainingAndCoachig = async (req, res) => {
  try {
    const { id } = req.params;
    const { brief, description, punchLine } = req.body;

    const trainingAndCoachig = await TrainingAndCoachig.findById(id);

    if (!trainingAndCoachig) {
      return res.status(404).json({ error: "Data not found" });
    }
    const baseUrl = process.env.BASE_URL1 || process.env.BASE_URL2 || process.env.BASE_URL3; 

    const imagePath = req.files && req.files['image'] ? `${baseUrl}/uploads/${req.files['image'][0].filename}` : null;



    // Update other fields
    trainingAndCoachig.brief = brief || trainingAndCoachig.brief;
    trainingAndCoachig.description = description || trainingAndCoachig.description;
    trainingAndCoachig.punchLine = punchLine || trainingAndCoachig.punchLine;
    if (imagePath) {
      trainingAndCoachig.image = imagePath;
    }


    await trainingAndCoachig.save();

    res.status(200).json({
      message: "Updated successfully",
      trainingAndCoachig,
    });
    console.log(req);
  } catch (err) {
    console.error("Error updating:", err);
    res.status(500).json({ error: "Failed to update" });
  }
};

module.exports = { updateTrainingAndCoachig };
