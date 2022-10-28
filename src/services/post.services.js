const { findUserByEmail } = require('./user.services');
const categoryServices = require('./categories.services');
const { BlogPost } = require('../models');
const { createCategoryPost } = require('./postCategory');
const { User, Category } = require('../models');

const verifyCategoryExist = async (categoryIds) => {
  const response = await Promise
    .all(categoryIds.map((category) => categoryServices.getCategoryById(category)));
    const check = await response.every((currId) => currId !== null);
    console.log(check);
    return check;
};

// const findPostById = async (id) => {
//   const post = await BlogPost.findByPk(id);
//   console.log(post);
//   return post.userId;
// };

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

const getAllPosts = async () => {
  const allPosts = await BlogPost.findAll({
    include: [
      {
        model: Category,
        as: 'categories',
        through: { attributes: [] },
      },
      {
        model: User,
        as: 'user',
        attributes: { exclude: ['password'] },
      },
    ],
  });
  return { error: null, message: allPosts };
};

module.exports = {
  registerNewPost,
  getAllPosts,
};
