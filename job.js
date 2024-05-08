const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  title: String,
  description: String,
  requirements: String,
  location: String,
  salary: Number,
  company: String,
  minSalary: Number,
  maxSalary: Number,
  salaryType: String,
  jobLocation: String,
  postingDate: String,
  experienceLevel: String, 
  companyLogo: String,
  employmentType: String, 
  postedBy: String,

  posterEmail: {
    type: String,
    required: true,
  },

  applicants: [{
    type: String,
    required: true,
  }],
});

const JobModel = mongoose.model("Job", jobSchema);

module.exports = JobModel;
