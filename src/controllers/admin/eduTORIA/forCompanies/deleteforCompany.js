const forCompanies = require('../../../../models/forCompanies');

const deleteforCompanie = async (req, res) => {
  try {
    const { id } = req.params;

    // Find and delete the forCompanie document by ID
    const deletedforCompanie = await forCompanies.findByIdAndDelete(id);

    // Check if the document was found and deleted
    if (!deletedforCompanie) {
      return res.status(404).json({ error: 'Further Training not found' });
    }

    res.status(200).json({ message: 'Further Training  deleted successfully', forCompanie: deletedforCompanie });
  } catch (err) {
    console.error('Error deleting Further Training:', err);
    res.status(500).json({ error: 'Failed to delete Further Training' });
  }
};

module.exports = { deleteforCompanie };
