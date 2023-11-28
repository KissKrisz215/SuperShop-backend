const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  username: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
    lowercase: true,
    trim: true,
  },
  subject: {
    required: true,
    type: String,
  },
  message: {
    type: String,
  },
});

const User = mongoose.model("Form", formSchema);
module.exports = User;
