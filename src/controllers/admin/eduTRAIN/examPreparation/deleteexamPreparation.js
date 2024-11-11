const examPreparations = require('../../../../models/examPreparation');

const DeleteExamPreparation = async (req, res) => {
  try {
    const { id } = req.params;

    // Find and delete the examPreparation document by ID
    const deletedExamPreparation = await examPreparations.findByIdAndDelete(id);

    // Check if the document was found and deleted
    if (!deletedExamPreparation) {
      return res.status(404).json({ error: 'Exam preparation not found' });
    }

    res.status(200).json({ message: 'Exam preparation deleted successfully', examPreparation: deletedExamPreparation });
  } catch (err) {
    console.error('Error deleting exam preparation:', err);
    res.status(500).json({ error: 'Failed to delete exam preparation' });
  }
};

module.exports = { DeleteExamPreparation };
