import User from "../models/userModel.js";
import bcrypt from "bcrypt";
// RegisterUser data and vailidate here and return response to authRoutes

export const RegisterUser = async (req, res) => {
    try {
        const { fullname, email, username, password, phone, role, profileImage, bio, skills, interestedCategories, education, country } = req.body;
        if (!fullname || !email || !username || !password || !phone || !role || !profileImage || !bio || !skills || !interestedCategories || !education || !country) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const user = await User.findOne({ email } || { username });
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ fullname, email, username, password: hashedPassword, phone, role, profileImage, bio, skills, interestedCategories, education, country });
        await newUser.save();
        res.status(201).json({ message: "User created successfully", data: newUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
} 