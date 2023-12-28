const express = require('express');
const validateLogin = require('../middleware/validateLogin');
const { LoginController } = require('../controller');
const validateLoginDoctorOrPatient = require('../middleware/validateLoginDoctorOrPatient');

const loginRoute = express.Router();

loginRoute.post('/doctor', validateLoginDoctorOrPatient, LoginController.postLoginDoctor);
loginRoute.post('/patient', validateLoginDoctorOrPatient, LoginController.postLoginPatient);
loginRoute.post('/admin', validateLogin, LoginController.postLoginAdmin);

module.exports = loginRoute;