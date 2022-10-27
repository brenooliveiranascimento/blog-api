const { Category } = require('../models');

const createCategory = async (name) => {
  try {
    const addCategory = await Category.create({ name });
    console.log(addCategory);
    return { error: null, message: addCategory };
  } catch (e) {
    console.log(e.message);
  }
};

module.exports = {
  createCategory,
};
