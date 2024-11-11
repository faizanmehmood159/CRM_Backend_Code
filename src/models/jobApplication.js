const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobApplicationSchema = new Schema({
  jobListingId: {
    type: Schema.Types.ObjectId,
    ref: 'JobListing', 
    required: true,
  },
  applicantName: {
    type: String,
    required: true,
    trim: true,
  },
  applicantEmail: {
    type: String,
    required: true,
    trim: true,
  },
  applicantPhone: {
    type: String, // Assuming phone number will be stored as a string
    trim: true, // Optional field, no 'required' attribute needed
  },
  linkedinProfile: {
    type: String, 
    trim: true, // Optional field
  },
  referralSource: {
    type: String, 
    trim: true, // Optional field
  },
  resume: {
    type: String, 
    required: true,

  },
  coverLetter: {
    type: String, 
    trim: true, // Optional field
  },
  notes: {
    type: String, 
    trim: true, // Optional field
  },
  appliedAt: {
    type: Date,
    default: Date.now, 
  },
  status:{
    type: String, 
    trim: true, // Optional field

  },
});

const jobApplication = mongoose.model('jobApplication', jobApplicationSchema);
module.exports = jobApplication;
