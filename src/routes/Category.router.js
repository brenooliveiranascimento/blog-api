const express = require('express');
const categoryController = require('../controller/category.controller');
const tokenVerification = require('../middlewares/validateJwt');

const router = express.Router();

router.use(tokenVerification);
router.post('/', categoryController.createCategory);
router.get('/', categoryController.getAllCategories);

module.exports = router;
