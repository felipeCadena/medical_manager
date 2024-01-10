const express = require('express');
const validateLogin = require('../middleware/validateLogin');
const { LoginController } = require('../controller');
const { validateInputsPatient, 
  validateInputsDoctor } = require('../middleware/validateLoginDoctorOrPatient');

const loginRoute = express.Router();

loginRoute.post('/doctor', validateLogin, validateInputsDoctor, LoginController.postLoginDoctor);
loginRoute.post('/patient', validateLogin, validateInputsPatient, LoginController.postLoginPatient);
loginRoute.post('/admin', validateLogin, LoginController.postLoginAdmin);

module.exports = loginRoute;