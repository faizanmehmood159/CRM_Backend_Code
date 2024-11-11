const InhouseTrainings = require('../../../../models/InHouseTraining');

const deleteInhouseTraining = async (req, res) => {
  try {
    const { id } = req.params;

    // Find and delete the InhouseTraining document by ID
    const deletedInhouseTraining = await InhouseTrainings.findByIdAndDelete(id);

    // Check if the document was found and deleted
    if (!deletedInhouseTraining) {
      return res.status(404).json({ error: 'Inhouse Training not found' });
    }

    res.status(200).json({ message: 'Inhouse Training  deleted successfully', InhouseTraining: deletedInhouseTraining });
  } catch (err) {
    console.error('Error deleting Inhouse Training:', err);
    res.status(500).json({ error: 'Failed to delete Inhouse Training' });
  }
};

module.exports = { deleteInhouseTraining };
