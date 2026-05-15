import User from "../models/userModel.js";

export const RegisterUser = async (req, res) => { 
  try {
    const { fullname, email, username, phone, password, role, profileImage, bio, skills, interestedCategories, education, country } = req.body;

    if (!fullname || !email || !username || !password || !phone || !role || !profileImage || !bio || !skills || !interestedCategories || !education || !country) {
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      });
    }

    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        success: false,
        message: "User already exists"
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ fullname, email, username, password: hashedPassword , phone, role, profileImage, bio, skills, interestedCategories, education, country });
    await newUser.save();

    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: newUser
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};    

export const loginUser = async (req, res) => {

  //loginUser
  try {

    const { username, password } = req.body;

    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    if (user.password !== password) {
      return res.status(401).json({
        success: false,
        message: "Invalid Password"
      });
    }

    res.status(200).json({
      success: true,
      message: "Login successful",
      data: user
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }

};


