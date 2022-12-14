const categoryService = require('../services/categories.services');

const createCategory = async (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: '"name" is required' });
  const { message } = await categoryService.createCategory(name);
  return res.status(201).json(message);
};

const getAllCategories = async (req, res) => {
  const allCategories = await categoryService.getAllCategories();
  res.status(200).json(allCategories);
};

module.exports = {
  createCategory,
  getAllCategories,
};
