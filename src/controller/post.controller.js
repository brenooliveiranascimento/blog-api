const jwt = require('jsonwebtoken');
const postServices = require('../services/post.services');

const createNewPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const token = req.header('Authorization');
  const secret = process.env.JWT_SECRET;
  const userData = jwt.verify(token, secret);

  if (!title || !content || !categoryIds) {
    return res.status(400).json({ message: 'Some required fields are missing' }); 
  }

  const { error, message } = await postServices.registerNewPost(
    { title, content }, userData, categoryIds,
  );

  if (error) return res.status(400).json({ message: error.message });
  console.log(message.dataValues);
  return res.status(201).json(message.dataValues);
};

const getAllPosts = async (req, res) => {
  const { error, message } = await postServices.getAllPosts();

  if (error) return res.status(400).json(error.message);
  return res.status(200).json(message);
};

const getById = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const { error, message } = await postServices.getPostById(id);

  if (error) return res.status(404).json({ message: error.message });

  return res.status(200).json(message);
};

module.exports = {
  createNewPost,
  getAllPosts,
  getById,
};
