const { PostCategory } = require('../models');

const createCategoryPost = async (categoriesId, postId) => {
  const createPostCategorys = await Promise.all(categoriesId.map((currId) => {
    const newPostCategory = PostCategory.create({ postId, categoryId: currId });
    return newPostCategory;
  }));
  const check = await createPostCategorys.every((currId) => currId !== null);
  return check;
};

module.exports = {
  createCategoryPost,
};
