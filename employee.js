const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
  },
  contactNumber: {
    type: Number,
  },
  location: {
    type: String,
  },
  resumeLink: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["employee"],
    required: true,
  },
  appliedJobs: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Job',
  }],
});

const EmployeeModel = mongoose.model("employee", employeeSchema);

module.exports = EmployeeModel;
