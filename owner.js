const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://abhijitmahakul16:abhijit16102002@cluster0.fluayic.mongodb.net/")
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
