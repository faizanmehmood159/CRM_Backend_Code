const furtherTrainings = require('../../../../models/furtherTraining');

const deletefurtherTraining = async (req, res) => {
  try {
    const { id } = req.params;

    // Find and delete the furtherTraining document by ID
    const deletedfurtherTraining = await furtherTrainings.findByIdAndDelete(id);

    // Check if the document was found and deleted
    if (!deletedfurtherTraining) {
      return res.status(404).json({ error: 'Further Training not found' });
    }

    res.status(200).json({ message: 'Further Training  deleted successfully', furtherTraining: deletedfurtherTraining });
  } catch (err) {
    console.error('Error deleting Further Training:', err);
    res.status(500).json({ error: 'Failed to delete Further Training' });
  }
};

module.exports = { deletefurtherTraining };
