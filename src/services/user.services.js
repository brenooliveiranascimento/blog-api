const { User } = require('../models');

const findAUser = async ({ email }) => {
  const getUser = await User.findOne({
    where: { email },
  });
  return getUser;
};

const findAllUser = async () => {
  const users = await User.findAll({
    attributes: { exclude: ['password'] },
  });
  return users;
};

const createUser = async (userData) => {
  try {
    const checkUserExist = await findAUser(userData);
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
  findAllUser,
};
