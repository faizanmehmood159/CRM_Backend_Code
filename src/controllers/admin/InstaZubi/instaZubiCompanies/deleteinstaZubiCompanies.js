const instaZubiCompanies = require('../../../../models/instaZubiCompanies');

const deleteinstaZubiCompanie = async (req, res) => {
  try {
    const { id } = req.params;

    // Find and delete the instaZubiCompanie document by ID
    const deletedinstaZubiCompanie = await instaZubiCompanies.findByIdAndDelete(id);

    // Check if the document was found and deleted
    if (!deletedinstaZubiCompanie) {
      return res.status(404).json({ error: 'insta Zubi Company not found' });
    }

    res.status(200).json({ message: 'insta Zubi Company  deleted successfully', instaZubiCompanie: deletedinstaZubiCompanie });
  } catch (err) {
    console.error('Error deleting insta Zubi Company:', err);
    res.status(500).json({ error: 'Failed to delete insta Zubi Company' });
  }
};

module.exports = { deleteinstaZubiCompanie };
