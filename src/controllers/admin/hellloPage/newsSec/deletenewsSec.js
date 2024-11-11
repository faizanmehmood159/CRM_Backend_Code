const newsSecs = require('../../../../models/newsSec');

const deletenewsSec = async (req, res) => {
  try {
    const { id } = req.params;

    // Find and delete the newsSec document by ID
    const deletednewsSec = await newsSecs.findByIdAndDelete(id);

    // Check if the document was found and deleted
    if (!deletednewsSec) {
      return res.status(404).json({ error: 'Further Training not found' });
    }

    res.status(200).json({ message: 'Further Training  deleted successfully', newsSec: deletednewsSec });
  } catch (err) {
    console.error('Error deleting Further Training:', err);
    res.status(500).json({ error: 'Failed to delete Further Training' });
  }
};

module.exports = { deletenewsSec };
