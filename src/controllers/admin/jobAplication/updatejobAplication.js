const JobApplication = require('../../../models/jobApplication');
const sendEmail = require('../../../../config/sendEmailJobApplication');

// Function to update the job application status (accepted/rejected)
const updateJobApplicationStatus = (status) => {
  return async (req, res) => {
    try {
      const jobApplicationId = req.params.id;

      // Fetch the job application by ID
      const jobApplication = await JobApplication.findById(jobApplicationId);

      // Check if the job application exists
      if (!jobApplication) {
        return res.status(404).send('Job Application not found.');
      }

      // Update the status of the job application
      jobApplication.status = status;
      await jobApplication.save();

      // Prepare email options based on the status
      const emailOptions = {
        to: jobApplication.applicantEmail,  // Ensure you're using the correct email field
        subject: status === 'accepted' ? 'Registration Accepted' : 'Registration Rejected',
        status
      };

      // Send email notification to the applicant
      await sendEmail(emailOptions);

      // Respond with a success message
      res.status(200).send(`Job Application ${status} successfully.`);
    } catch (error) {
      console.error('Error updating Job Application status:', error.message);
      res.status(500).send('Error updating Job Application status.');
    }
  };
};

module.exports = { updateJobApplicationStatus };
