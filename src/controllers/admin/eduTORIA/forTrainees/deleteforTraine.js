const forTraineess = require('../../../../models/forTrainees');

const DeleteforTrainees = async (req, res) => {
  try {
    const { id } = req.params;

    // Find and delete the forTrainees document by ID
    const deletedforTrainees = await forTraineess.findByIdAndDelete(id);

    // Check if the document was found and deleted
    if (!deletedforTrainees) {
      return res.status(404).json({ error: 'Exam preparation not found' });
    }

    res.status(200).json({ message: 'Exam preparation deleted successfully', forTrainees: deletedforTrainees });
  } catch (err) {
    console.error('Error deleting exam preparation:', err);
    res.status(500).json({ error: 'Failed to delete exam preparation' });
  }
};

module.exports = { DeleteforTrainees };
