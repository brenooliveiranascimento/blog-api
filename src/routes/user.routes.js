const express = require('express');
const userControllers = require('../controller/user.controller');
const validateToken = require('../middlewares/validateJwt');

const router = express.Router();

router.post('/', userControllers.createUser);
router.use(validateToken);
router.get('/', userControllers.getAllUsers);
router.get('/:id', userControllers.getById);

module.exports = router;
