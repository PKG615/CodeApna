export const validateUser = (
  req,
  res,
  next
) => {

  const {
    fullname, email, username, password, phone,
    role, profileImage, bio,
    skills, interestedCategories,
    education, country
  } = req.body;

  // Required Fields Validation
  if (
    !fullname ||
    !email ||
    !username ||
    !password ||
    !phone ||
    !role ||
    !profileImage ||
    !bio ||
    !skills ||
    !interestedCategories ||
    !education ||
    !country 
  ) {
    return res.status(400).json({
      success: false,
      message: "All fields are required"
    });
  }

  // Name Validation
  if (fullname.length < 3) {
    return res.status(400).json({
      success: false,
      message: "Name must be at least 3 characters"
    });
  }

  // Email Validation
  const emailRegex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: "Invalid email format"
    });
  }

  // Username Validation
  if (username.length < 4) {
    return res.status(400).json({
      success: false,
      message: "Username must be at least 4 characters"
    });
  }

  // Password Validation
  if (password.length < 6) {
    return res.status(400).json({
      success: false,
      message: "Password must be at least 6 characters"
    });
  }

  // Phone Validation
  if (phone.length !== 10) {
    return res.status(400).json({
      success: false,
      message: "Phone number must be 10 digits"
    });
  }

  // Role Validation
  if (role !== "student" && role !== "teacher" && role !== "admin") {
    return res.status(400).json({
      success: false,
      message: "Invalid role"
    });
  }

  // Profile Image Validation
  const profileImageRegex =
    /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;

  if (!profileImageRegex.test(profileImage)) {
    return res.status(400).json({
      success: false,
      message: "Invalid profile image URL"
    });
  }

  // Bio Validation
  if (bio.length < 10) {
    return res.status(400).json({
      success: false,
      message: "Bio must be at least 10 characters"
    });
  }

  // Skills Validation
  if (skills.length < 1) {
    return res.status(400).json({
      success: false,
      message: "Skills are required"
    });
  }

  // Interested Categories Validation
  if (interestedCategories.length < 1) {
    return res.status(400).json({
      success: false,
      message: "Interested categories are required"
    });
  }

  // Education Validation
  if (education.length < 2) {
    return res.status(400).json({
      success: false,
      message: "Education must be at least 2 characters"
    });
  }

  // Country Validation
  if (country.length < 2) {
    return res.status(400).json({
      success: false,
      message: "Country must be at least 2 characters"
    });
  }

  // Is Verified Validation
  if (isVerified !== true && isVerified !== false) {
    return res.status(400).json({
      success: false,
      message: "Is verified must be true or false"
    });
  }

  next();
};
export default { userValidation: validateUser };