const JobListing = require('../../../models/jobListing');

const deleteJobListing = async (req, res) => {
  try {
    const { id } = req.params;

    // Find and delete the JobListing document by ID
    const deletedJobListing = await JobListing.findByIdAndDelete(id);

    // Check if the document was found and deleted
    if (!deletedJobListing) {
      return res.status(404).json({ error: 'Job Listing not found' });
    }

    res.status(200).json({ message: 'Job Listing deleted successfully', jobListing: deletedJobListing });
  } catch (err) {
    console.error('Error deleting Job Listing:', err);
    res.status(500).json({ error: 'Failed to delete Job Listing' });
  }
};

module.exports = { deleteJobListing };
