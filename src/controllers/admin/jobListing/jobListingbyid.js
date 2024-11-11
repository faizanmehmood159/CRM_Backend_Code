const JobListing = require('../../../models/jobListing');

const getJobListingById = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the JobListing by ID
    const jobListing = await JobListing.findById(id);

    // If no job listing is found, return a 404 error
    if (!jobListing) {
      return res.status(404).json({ error: 'Job Listing not found' });
    }

    // Return the found job listing
    res.status(200).json(jobListing);
  } catch (err) {
    console.error('Error fetching Job Listing:', err);
    res.status(500).json({ error: 'Failed to fetch Job Listing' });
  }
};

module.exports = { getJobListingById };
