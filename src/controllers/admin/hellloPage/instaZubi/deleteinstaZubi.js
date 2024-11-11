const instaZubis = require('../../../../models/instaZubis');

const deleteinstaZubi = async (req, res) => {
  try {
    const { id } = req.params;

    // Find and delete the instaZubi document by ID
    const deletedinstaZubi = await instaZubis.findByIdAndDelete(id);

    // Check if the document was found and deleted
    if (!deletedinstaZubi) {
      return res.status(404).json({ error: 'insta Zubi  not found' });
    }

    res.status(200).json({ message: 'insta Zubi   deleted successfully', instaZubi: deletedinstaZubi });
  } catch (err) {
    console.error('Error deleting insta Zubi :', err);
    res.status(500).json({ error: 'Failed to delete insta Zubi ' });
  }
};

module.exports = { deleteinstaZubi };
