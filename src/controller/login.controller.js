const loginServices = require('../services/login.service');
const { createToken } = require('../utils/jwt.utils');

const createUser = async (req, res) => {
  const { email, password } = req.body;
  const { error } = await loginServices.registerUser({ email, password });
  if (error) {
    return res.status(400).json({ message: error.message });
  }
  const token = createToken({ email, password });
   res.status(200).json({ token });
  };

module.exports = {
  createUser,
};