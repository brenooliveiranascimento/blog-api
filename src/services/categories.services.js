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

const getAllCategories = async () => {
  const categories = Category.findAll();
  return categories;
};

const getCategoryById = async (id) => {
  const categories = Category.findByPk(id);
  return categories;
};

module.exports = {
  createCategory,
  getAllCategories,
  getCategoryById,
};
