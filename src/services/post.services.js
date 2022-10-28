const { findUserByEmail } = require('./user.services');
const categoryServices = require('./categories.services');
const { BlogPost } = require('../models');
const { createCategoryPost } = require('./postCategory');

const verifyCategoryExist = async (categoryIds) => {
  const response = await Promise
    .all(categoryIds.map((category) => categoryServices.getCategoryById(category)));
    const check = await response.every((currId) => currId !== null);
    console.log(check);
    return check;
};

const registerNewPost = async (post, currUser, categoryIds) => {
  const verifyCategorys = await verifyCategoryExist(categoryIds);
  if (!verifyCategorys) return { error: { message: 'one or more "categoryIds" not found' } };

  const getUser = await findUserByEmail({ email: currUser.data.email });
  const createPost = await BlogPost.create({ userId: getUser.id, 
    ...post,
    published: new Date(),
    updated: new Date(),
  });

  const newPostCategory = await createCategoryPost(categoryIds, createPost.id);
  if (!newPostCategory) return { error: { message: 'Erro ao criar novo post' } };

  return { error: null, message: createPost };
};

module.exports = {
  registerNewPost,
};
