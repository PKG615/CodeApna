import Contact from "../models/contactModel.js";

// GET ALL CONTACTS
export const getContacts = async (req, res) => {

  try {

    const contacts = await Contact.find()
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: contacts.length,
      message: "Contacts fetched successfully",
      data: contacts
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }

};

export const getContactById = async (req, res) => {

  try {

    const contact = await Contact.findById(req.params.id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Contact not found"
      });
    }

    res.status(200).json({
      success: true,
      data: contact
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }

};



// CREATE CONTACT
export const createContact = async (req, res) => {

  try {

    console.log(req.body);

    const {
      fullname,
      email,
      username,
      password,
      phone,
      role,
      profileImage,
      bio,
      skills,
      interestedCategories,
      education,
      country
    } = req.body;


    // VALIDATION
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


    // CHECK EMAIL EXISTS
    const existingEmail = await Contact.findOne({ email });

    if (existingEmail) {

      return res.status(400).json({
        success: false,
        message: "Email already exists"
      });

    }


    // CREATE CONTACT
    const newContact = await Contact.create({
      fullname,
      email,
      username,
      password,
      phone,
      role,
      profileImage,
      bio,
      skills,
      interestedCategories,
      education,
      country
    });


    res.status(201).json({
      success: true,
      message: "Contact saved successfully",
      data: newContact
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message
    });

  }

};

// UPDATE CONTACT
export const updateContact = async (req, res) => {

  try {

    const updatedContact =
      await Contact.findByIdAndUpdate(

        req.params.id,
        req.body,

        {
          new: true,
          runValidators: true
        }

      );

    if (!updatedContact) {

      return res.status(404).json({
        success: false,
        message: "Contact not found"
      });

    }

    res.status(200).json({
      success: true,
      message: "Contact updated successfully",
      data: updatedContact
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }

};

// DELETE CONTACT
export const deleteContact = async (req, res) => {

  try {

    const deletedContact =
      await Contact.findByIdAndDelete(req.params.id);

    if (!deletedContact) {

      return res.status(404).json({
        success: false,
        message: "Contact not found"
      });

    }

    res.status(200).json({
      success: true,
      message: "Contact deleted successfully"
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};