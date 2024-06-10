const express = require("express");
const mongoose = require("mongoose");
const OwnerModel = require("./owner");
const EmployeeModel = require("./employee");
const JobModel = require("./job");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", cors(), (req, res) => {
  res.send("Welcome to the Job Portal API");
});

app.post("/login/owner", async (req, res) => {
  try {
    const { email, password } = req.body;
    const owner = await OwnerModel.findOne({ email, password, role: "owner" });
    if (owner) {
      res.json("exist");
    } else {
      res.json("notexist");
    }
  } catch (error) {
    console.error("Error in owner login:", error);
    res.status(500).json("fail");
  }
});

app.post("/signup/owner", async (req, res) => {
  try {
    const { email, userName, contactNumber, shopName, location, pancardNumber, password } = req.body;
    const ownerData = {
      email,
      userName,
      contactNumber,
      shopName,
      location,
      pancardNumber,
      password,
      role: "owner",
    };
    await OwnerModel.create(ownerData);
    res.json("notexist");
  } catch (error) {
    console.error("Error in owner signup:", error);
    res.status(500).json("fail");
  }
});

app.post("/signup/employee", async (req, res) => {
  try {
    const { email, userName, location, contactNumber, resumeLink, password } = req.body;
    const employeeData = {
      email,
      userName,
      contactNumber,
      location,
      resumeLink,
      password,
      role: "employee",
    };
    await EmployeeModel.create(employeeData);
    res.json("notexist");
  } catch (error) {
    console.error("Error in employee signup:", error);
    res.status(500).json("fail");
  }
});

app.post("/login/employee", async (req, res) => {
  try {
    const { email, password } = req.body;
    const employee = await EmployeeModel.findOne({ email, password, role: "employee" });
    if (employee) {
      res.json("exist");
    } else {
      res.json("notexist");
    }
  } catch (error) {
    console.error("Error in employee login:", error);
    res.status(500).json("fail");
  }
});

app.post("/updateProfile", async (req, res) => {
  const { email, userName, contactNumber, shopName, location, pancardNumber } = req.body;
  try {
    const updateFields = { userName, contactNumber, shopName, location, pancardNumber };
    Object.keys(updateFields).forEach(key => updateFields[key] === undefined && delete updateFields[key]);
    const updatedUser = await OwnerModel.findOneAndUpdate({ email }, { $set: updateFields }, { new: true });
    console.log("Profile updated successfully:", updatedUser);
    res.json({ success: true, message: "Profile updated successfully" });
  } catch (error) {
    console.error("Error updating profile:", error);
    res.status(500).json({ success: false, error: "Failed to update profile." });
  }
});

app.get("/getProfile", async (req, res) => {
  try {
    const userData = await OwnerModel.findOne({ email: req.query.email });
    if (userData) {
      res.json({ success: true, userData });
    } else {
      res.status(404).json({ success: false, error: "User not found." });
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
    res.status(500).json({ success: false, error: "Failed to fetch user data." });
  }
});

app.post("/postJob", async (req, res) => {
  console.log(req.body);
  const {
    title,
    description,
    requirements,
    location,
    salary,
    company,
    minSalary,
    maxSalary,
    salaryType,
    jobLocation,
    postingDate,
    experienceLevel,
    companyLogo,
    employmentType,
    jobPostedBy,
  } = req.body;
  try {
    const jobData = {
      title,
      description,
      requirements,
      location,
      salary,
      company,
      minSalary,
      maxSalary,
      salaryType,
      jobLocation,
      postingDate: new Date(postingDate),
      experienceLevel,
      companyLogo,
      employmentType,
      posterEmail: jobPostedBy,
    };
    const newJob = await JobModel.create(jobData);
    res.json({ success: true, message: "Job posted successfully", job: newJob });
  } catch (error) {
    console.error("Error posting job:", error);
    res.status(500).json({ success: false, error: "Failed to post job." });
  }
});

app.get("/getMyJobs/:email", async (req, res) => {
  try {
    const jobs = await JobModel.find({ posterEmail: req.params.email });
    res.json({ success: true, jobs });
  } catch (error) {
    console.error("Error fetching user's jobs:", error);
    res.status(500).json({ success: false, error: "Failed to fetch user's jobs." });
  }
});

app.delete("/deleteJob/:jobId", async (req, res) => {
  try {
    const jobId = req.params.jobId;
    const { email } = req.body;
    console.log(`Delete request for jobId: ${jobId} by email: ${email}`);
    const job = await JobModel.findOneAndDelete({ _id: jobId, posterEmail: email });

    if (job) {
      res.json({ success: true, message: "Job deleted successfully" });
    } else {
      res.status(404).json({ success: false, error: "Job not found or user unauthorized to delete this job." });
    }
  } catch (error) {
    console.error("Error deleting job:", error);
    res.status(500).json({ success: false, error: "Failed to delete job." });
  }
});

app.get("/getJobs", async (req, res) => {
  try {
    const jobs = await JobModel.find({});
    res.json({ success: true, jobs });
  } catch (error) {
    console.error("Error fetching job data:", error);
    res.status(500).json({ success: false, error: "Failed to fetch job data." });
  }
});

app.get("/getJob/:id", async (req, res) => {
  try {
    const job = await JobModel.findById(req.params.id);
    res.json({ success: true, job });
  } catch (error) {
    console.error("Error fetching job details:", error);
    res.status(500).json({ success: false, error: "Failed to fetch job details." });
  }
});

app.post("/applyJob/:jobId", async (req, res) => {
  try {
    console.log('Received job application for ID:', req.params.jobId);
    const { email } = req.body;
    const { jobId } = req.params;
    console.log('Applicant email:', email);
    const job = await JobModel.findById(jobId);
    if (!job) {
      console.error('Invalid job ID:', jobId);
      return res.status(400).json({ success: false, error: "Invalid job ID." });
    }
    if (!job.applicants) {
      job.applicants = [];
    } else if (job.applicants.includes(email)) {
      console.error('User already applied for this job:', email);
      return res.status(400).json({ success: false, error: "User already applied for this job." });
    }
    const updatedJob = await JobModel.findByIdAndUpdate(jobId, { $push: { applicants: email } }, { new: true });
    res.json({ success: true, message: "Application submitted successfully.", updatedJob });
  } catch (error) {
    console.error("Error submitting application:", error);
    res.status(500).json({ success: false, error: "Failed to submit application." });
  }
});

app.get('/getEmployees', async (req, res) => {
  try {
    const employees = await EmployeeModel.find({});
    res.json({ success: true, employees });
  } catch (error) {
    console.error('Error fetching employee data:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch employee data.' });
  }
});

app.get("/getEmployee/:id", async (req, res) => {
  try {
    const employee = await EmployeeModel.findById(req.params.id);
    if (employee) {
      res.json({ success: true, employee });
    } else {
      res.status(404).json({ success: false, error: "Employee not found." });
    }
  } catch (error) {
    console.error("Error fetching employee details:", error);
    res.status(500).json({ success: false, error: "Failed to fetch employee details." });
  }
});

app.listen(8000, () => {
  console.log("Server running on port 8000");
});
