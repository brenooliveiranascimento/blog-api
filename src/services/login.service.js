const { User } = require('../models');

const registerUser = async ({ email, _password }) => {
  const checkAlredyExist = await User.findOne({
    where: { email },
  });
  if (!checkAlredyExist) {
    return { error: { message: 'Invalid fields' } };
  }
  return { error: null };
};

module.exports = {
  registerUser,
};
