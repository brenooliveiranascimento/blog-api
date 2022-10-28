const { User } = require('../models');

const findUserByEmail = async ({ email }) => {
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

const findUserById = async (id) => {
  const user = await User.findByPk(id, {
    attributes: { exclude: ['password'] },
  });
  if (!user) return { error: { message: 'User does not exist' } };
  return { error: null, user };
};

const createUser = async (userData) => {
  try {
    const checkUserExist = await findUserByEmail(userData);
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
  findUserById,
  findUserByEmail,
};
