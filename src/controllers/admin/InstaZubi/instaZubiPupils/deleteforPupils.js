const forPupilss = require('../../../../models/forPupils');

const DeleteforPupils = async (req, res) => {
  try {
    const { id } = req.params;

    // Find and delete the forPupils document by ID
    const deletedforPupils = await forPupilss.findByIdAndDelete(id);

    // Check if the document was found and deleted
    if (!deletedforPupils) {
      return res.status(404).json({ error: 'Pupils  not found' });
    }

    res.status(200).json({ message: 'Pupils  deleted successfully', forPupils: deletedforPupils });
  } catch (err) {
    console.error('Error deleting Pupils :', err);
    res.status(500).json({ error: 'Failed to delete Pupils ' });
  }
};

module.exports = { DeleteforPupils };
