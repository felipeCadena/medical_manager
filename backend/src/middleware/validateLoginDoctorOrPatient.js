const { Doctor, Patient } = require('../models');
const validateLogin = require('./validateLogin');

const validateInputsDoctor = async (req, res, next) => {
  let user;
  const { email, password, role } = req.body;
  if (role === 'doctor') {
    user = await Doctor.findOne({ where: { email } });
  } else {
    user = await Patient.findOne({ where: { email } });
  }
  if (!user || user.password !== password) {
    return res.status(401).json({ message: 'Invalid fields' });
  }
  next();
};

module.exports = [
  validateLogin,
  validateInputsDoctor,
];