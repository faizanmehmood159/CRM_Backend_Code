const JobListing = require('../../../models/jobListing');

const getJobListings = async (req, res) => {
  try {
    // Retrieve all JobListing documents
    const jobListings = await JobListing.find();

    res.status(200).json(jobListings);
  } catch (err) {
    console.error('Error fetching Job Listings:', err);
    res.status(500).json({ error: 'Failed to fetch Job Listings' });
  }
};

module.exports = { getJobListings };
