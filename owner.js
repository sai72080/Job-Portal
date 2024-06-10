const mongoose = require("mongoose");

mongoose.connect("enter your mongodb url")
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch(() => {
    console.log('MongoDB connection failed');
  });

const newSchema = new mongoose.Schema({
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
  shopName: {
    type: String,
  },
  location: {
    type: String,
  },
  pancardNumber: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["owner", "employee"],
    required: true,
  },
});

const OwnerModel = mongoose.model("owner", newSchema);

module.exports = OwnerModel;
