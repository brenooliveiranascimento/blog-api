const { User } = require('../models');

const findAUser = async ({ email }) => {
  const findUser = await User.findOne({
    where: { email },
  });
  return findUser;
};

const createUser = async (userData) => {
  try {
    const checkUserExist = await findAUser(userData);
    console.log(checkUserExist);
    if (checkUserExist) return { error: { message: 'User already registered' } };

    const newUser = await User.create({
      ...userData,
    });

    return { error: null, newUser };
  } catch (e) {
    console.log(e);
    return { error: { message: 'Erro ao conectaro no banco de dados' } };
  }
};

module.exports = {
  createUser,
};
