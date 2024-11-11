require('dotenv').config();
const JobApplication = require('../../../models/jobApplication');
const sendEmail = require('../../../../config/sendEmailJobApplication');

// Save job application
const saveJobApplication = async (req, res) => {
  try {
    const formData = req.body;

    // Base URL configuration
    const baseUrl = process.env.BASE_URL1 || process.env.BASE_URL2 || process.env.BASE_URL3; 
    const resumePath = req.files && req.files['resume'] ? `${baseUrl}/uploads/${req.files['resume'][0].filename}` : null;

    
    // Handle image file (if uploaded)

    // Handle resume file (if uploaded)

    // Handle cover letter file (if uploaded)

    // List of required fields (excluding files)
    const requiredFields = [
      'jobListingId', 'applicantName', 'applicantEmail'
    ];

    // Check for missing required fields
    const emptyFields = requiredFields.filter(field => !formData[field]);

    if (emptyFields.length > 0) {
      return res.status(400).send(`${emptyFields.join(', ')} field is required.`);
    }

    // Save job application to the database
    const jobApplication = new JobApplication({
      ...formData, // Spread form data fields
      resume: resumePath,  // Save resume path
      status: 'pending',
    });

    await jobApplication.save();


    // Send email to the hiring team
    await sendEmail({
      to: 'maazkhalidbhatti@gmail.com',  // Replace with your hiring team's email
      subject: 'New Job Application Received',
      text: `A new job application has been received from ${formData.applicantName}.`,
      attachments: [
        { path: resumePath },
      ]
    });

    // Send confirmation email to the applicant
    await sendEmail({
      to: formData.applicantEmail,
      subject: 'Job Application Confirmation',
      text: `Thank you, ${formData.applicantName}, for applying to the position. We will review your application and get back to you soon.`,
    });

    res.status(200).send('Job application submitted successfully.');
  } catch (error) {
    console.error('Error submitting job application:', error.message);
    res.status(500).send('Error submitting job application.');
  }
};

module.exports = { saveJobApplication };
