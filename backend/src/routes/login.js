const express = require('express');
const validateLogin = require('../middleware/validateLogin');
const { LoginController } = require('../controller');

const route = express.Router();

route.post('/', validateLogin, LoginController.postLogin);

module.exports = route;