import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({

  fullname: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true,
    unique: true
  },

  username: {
    type: String,
    required: true
  },

  phone: {
    type: Number,
    required: true
  },

  password: {
    type: String,
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

export default mongoose.model("Contact", contactSchema);