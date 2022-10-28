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
module.exports = {
  createNewPost,
};
