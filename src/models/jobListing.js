const mongoose = require("mongoose");

const jobListingSchema = new mongoose.Schema({
  companyOverview: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  jobType: {
    type: String,
    required: true,
  },
  postedDate: {
    type: String,
    required: true,
  },
  contactEmail: {
    type: String,
    required: true,
  },
  experienceLevel: {
    type: String,
    required: true,
  },
  experienceDiversityLevel: {
    type: String,
    required: true,
  },
  jobCategories: {
    type: [String], 
    required: true,
  },
  jobListings: [
    {
      title: {
        type: String, 
        required: true,
      },
      description: {
        type: String, 
        required: true,
      },
      responsibilities: {
        type: [String], 
        required: true,
      },
      requirements: {
        type: [String], 
        required: true,
      },
      preferredQualifications: {
        type: [String], 
        required: false,
      },
      benefits: {
        salaryRange: {
          type: String,
          required: true,
        },
        perks: {
          type: String,
          required: true,
        },
        healthBenefits: {
          type: String,  
          required: true,
        },
        workLifeBalance: {
          type: String,
          required: true,
        },
        remoteOptions: {
          type: String,
          required: true,
        }
      },
      
    },
  ],
});

const JobListing = mongoose.model("JobListing", jobListingSchema);

module.exports = JobListing;
