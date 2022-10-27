const { User } = require('../models');

const createUser = async (userData) => {
  try {
    const newUser = await User.create({
      ...userData,
    });

    if (!newUser) {
      return { error: { message: 'Erro ao cadastrar um novo usuario' } };
    }

    return newUser;
  } catch (e) {
    console.log(e);
    return { error: { message: 'Erro ao conectaro no banco de dados' } };
  }
};

module.exports = {
  createUser,
};
