export const validateContact = (
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
    !phone ||
    !username ||
    !password ||
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
      message:
        "Full Name must be at least 3 characters"
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

  // Phone Validation
  if (phone.length !== 10) {
    return res.status(400).json({
      success: false,
      message:
        "Phone number must be 10 digits"
    });
  }

  // Subject Validation
  if (subject.length < 3) {
    return res.status(400).json({
      success: false,
      message:
        "Subject must be at least 3 characters"
    });
  }

  // Message Validation
  if (message.length < 10) {
    return res.status(400).json({
      success: false,
      message:
        "Message must be at least 10 characters"
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
    /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/;

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

  next();
};
export default { contactValidation: validateContact };