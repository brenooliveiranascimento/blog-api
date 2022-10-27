const express = require('express');
const userControllers = require('../controller/user.controller');

const router = express.Router();

router.post('/', userControllers.createUser);

module.exports = router;
