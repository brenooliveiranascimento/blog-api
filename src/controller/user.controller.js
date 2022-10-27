const userService = require('../services/user.services');
const { createToken } = require('../utils/jwt.utils');
const authValidation = require('./verification/newUserVerificaion');
require('dotenv/config');

const createUser = async (req, res) => {
  const { email, password } = req.body;
  const { error: validateError, message: validateMessage } = await authValidation(req.body);
  if (validateError) return res.status(400).json({ message: validateMessage });
  
  const { error } = await userService.createUser(req.body);

  if (error) return res.status(409).json({ message: error.message });

  const token = createToken({ email, password });

  res.status(201).json({ token });
};

const getAllUsers = async (req, res) => {
  const message = await userService.findAllUser();
  res.status(200).json(message);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const { error, user } = await userService.findUserById(id);
  if (error) return res.status(404).json({ message: error.message });
  res.status(200).json(user);
};

module.exports = {
  createUser,
  getAllUsers,
  getById,
};
