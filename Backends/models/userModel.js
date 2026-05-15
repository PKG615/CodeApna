import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

  fullname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  profileImage: {
    type: String,
    required: true
  },
  bio: {
    type: String,
    required: true
  },
  skills: {
    type: [String],
    required: true
  },
  interestedCategories: {
    type: [String],
    required: true
  },
  education: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  }

}, { timestamps: true });


// IMPORTANT
const User =
  mongoose.models.User ||
  mongoose.model("User", userSchema);

export default User;