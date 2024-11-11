const JobListing = require('../../../models/jobListing');
require('dotenv').config(); // In case you need to manage environment variables

const updateJobListing = async (req, res) => {
  try {
    const { id } = req.params;
    const { companyOverview, location, jobType, postedDate, contactEmail, experienceLevel, experienceDiversityLevel, jobCategories, jobListings } = req.body;

    // Find the existing JobListing document by ID
    let jobListing = await JobListing.findById(id);

    if (!jobListing) {
      return res.status(404).json({ error: 'Job Listing not found' });
    }

    // Update fields if new values are provided
    if (companyOverview) {
      jobListing.companyOverview = companyOverview;
    }
    if (location) {
      jobListing.location = location;
    }
    if (jobType) {
      jobListing.jobType = jobType;
    }
    if (postedDate) {
      jobListing.postedDate = postedDate;
    }
    if (contactEmail) {
      jobListing.contactEmail = contactEmail;
    }
    if (experienceLevel) {
      jobListing.experienceLevel = experienceLevel;
    }
    if (experienceDiversityLevel) {
      jobListing.experienceDiversityLevel = experienceDiversityLevel;
    }
    if (jobCategories) {
      jobListing.jobCategories = jobCategories;
    }
    if (jobListings) {
      jobListing.jobListings = jobListings.map((listing, index) => ({
        title: listing.title || jobListing.jobListings[index]?.title,
        description: listing.description || jobListing.jobListings[index]?.description,
        responsibilities: listing.responsibilities || jobListing.jobListings[index]?.responsibilities,
        requirements: listing.requirements || jobListing.jobListings[index]?.requirements,
        preferredQualifications: listing.preferredQualifications || jobListing.jobListings[index]?.preferredQualifications,
        benefits: {
          salaryRange: listing.benefits?.salaryRange || jobListing.jobListings[index]?.benefits.salaryRange,
          perks: listing.benefits?.perks || jobListing.jobListings[index]?.benefits.perks,
          healthBenefits: listing.benefits?.healthBenefits !== undefined 
            ? listing.benefits.healthBenefits 
            : jobListing.jobListings[index]?.benefits.healthBenefits,
          workLifeBalance: listing.benefits?.workLifeBalance || jobListing.jobListings[index]?.benefits.workLifeBalance,
          remoteOptions: listing.benefits?.remoteOptions !== undefined 
            ? listing.benefits.remoteOptions 
            : jobListing.jobListings[index]?.benefits.remoteOptions,
        },
      }));
    }

    // Save the updated document
    await jobListing.save();

    console.log('Job Listing Updated:', jobListing);

    res.status(200).json({
      message: 'Job Listing updated successfully',
      jobListing,
    });
  } catch (err) {
    console.error('Error updating Job Listing:', err);
    res.status(500).json({
      error: 'Failed to update Job Listing',
    });
  }
};

module.exports = { updateJobListing };
