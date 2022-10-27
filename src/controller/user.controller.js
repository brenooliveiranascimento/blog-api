const userService = require('../services/user.services');

const createUser = (req, res) => {
  const newUser = userService.createUser({ ...req.body });
};

module.exports = {
  createUser,
};
