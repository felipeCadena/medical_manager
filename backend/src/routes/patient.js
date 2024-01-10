const express = require('express');
const { PatientController } = require('../controller');

const patientRoute = express.Router();

patientRoute.get('/', PatientController.getPatient);

module.exports = patientRoute;