const express = require('express');
const loginController = require('../controller/login.controller');
const { bodyValidation } = require('../middlewares/body.validation');

const route = express.Router();
route.use(bodyValidation);
route.post('/', loginController.createUser);

module.exports = route;
