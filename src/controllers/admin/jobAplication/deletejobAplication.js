const JobApplication = require('../../../models/jobApplication');

const deleteJobApplication = async (req, res) => {
  try {
    const { id } = req.params;

    // Find and delete the JobApplication by ID
    const jobApplication = await JobApplication.findByIdAndDelete(id);

    if (!jobApplication) {
      return res.status(404).send('JobApplication not found.');
    }


    res.status(200).send('JobApplication deleted successfully.');
  } catch (error) {
    console.error('Error deleting JobApplication:', error.message);
    res.status(500).send('Error deleting JobApplication.');
  }
};

module.exports = { deleteJobApplication };
