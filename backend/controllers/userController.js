const User = require("../models/User");

const createUser = async (req, res) => {
  const { name, email } = req.body;

  const user = await User.create({ name, email });
  res.json(user);
};

const getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

module.exports = { createUser, getUsers };
