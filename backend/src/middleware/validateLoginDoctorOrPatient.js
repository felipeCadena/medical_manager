const { Doctor, Patient } = require('../models');
const validateLogin = require('./validateLogin');

const validateInputsDoctor = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await Doctor.findOne({ where: { email } });

  if (!user || user.password !== password) {
    return res.status(401).json({ message: 'Campos inválidos' });
  }
  next();
};

const validateInputsPatient = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await Patient.findOne({ where: { email } });
  if (!user || user.password !== password) {
    return res.status(401).json({ message: 'Campos inválidos' });
  }
  next();
};

module.exports = {
  validateLogin,
  validateInputsDoctor,
  validateInputsPatient,
};