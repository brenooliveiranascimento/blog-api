const express = require('express');
const postController = require('../controller/post.controller');
const validateToken = require('../middlewares/validateJwt');

const router = express.Router();

router.use(validateToken);
router.get('/', postController.getAllPosts);
router.post('/', postController.createNewPost);

module.exports = router;