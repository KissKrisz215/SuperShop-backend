const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
    lowercase: true,
    trim: true,
    unique: true,
  },
  password: {
    required: true,
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  address: {
    type: String,
  },
  image: {
    type: String,
    default:
      "https://res.cloudinary.com/dyayaq1ee/image/upload/v1700578456/profile_yh0z4o.webp",
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
