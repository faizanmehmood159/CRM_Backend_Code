const JobListing = require('../../../models/jobListing');


const addJobListing = async (req, res) => {
  try {
    const { 
      companyOverview,
       location,
       jobType,
       postedDate,
       contactEmail,
       experienceLevel,
       experienceDiversityLevel,
      jobCategories,
      jobListings 
    } = req.body;

   
    const jobListing = new JobListing({
      companyOverview,
      location,
      jobType,
      postedDate,
      contactEmail,
      experienceLevel,
      experienceDiversityLevel,
      jobCategories,
      jobListings: jobListings.map(listing => ({
        title: listing.title,
        description: listing.description,
        responsibilities: listing.responsibilities,
        requirements: listing.requirements,
        preferredQualifications: listing.preferredQualifications,
        benefits: {
          salaryRange: listing.benefits.salaryRange,
          perks: listing.benefits.perks,
          healthBenefits: listing.benefits.healthBenefits,
          workLifeBalance: listing.benefits.workLifeBalance,
          remoteOptions: listing.benefits.remoteOptions,
        }
      }))
    });

    await jobListing.save();
    console.log('Job Listing Added: ', jobListing);
    res.status(201).json({ message: 'Job Listing created successfully', jobListing });
  } catch (err) {
    console.error('Error creating Job Listing:', err);
    res.status(500).json({ error: 'Failed to create Job Listing' });
  }
};

module.exports = { addJobListing };
