const JobApplication = require('../../../models/jobApplication');

const getAllJobApplications = async (req, res) => {
  try {
    const JobApplications = await JobApplication.find().exec();
    res.status(200).json(JobApplications);
  } catch (error) {
    console.error('Error fetching JobApplications:', error.message);
    res.status(500).send('Error fetching JobApplications.');
  }
};

module.exports = { getAllJobApplications };
