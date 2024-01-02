const { Patient } = require('../models');

const validateFields = (req, res, next) => {
  const { image, fullname, gender, birth } = req.body;
  if (!birth || !image || !fullname || !gender) {
    return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
  }
  
  next();
};

const validateFields2 = (req, res, next) => {
  const { email, password, CPF, phone } = req.body;
  if (!email || !password || !CPF || !phone) {
    return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
  }

  next();
};

const validateNewPatient = async (req, res, next) => {
  const { email, CPF } = req.body;
  
  const patientEmail = await Patient.findOne({ where: { email } });
  if (patientEmail) {
    return res.status(401).json({ message: 'Email já cadastrado' });
  }

  const patientCPF = await Patient.findOne({ where: { CPF } });
  if (patientCPF) {
    return res.status(401).json({ message: 'CPF já cadastrado' });
  }

  next();
};

module.exports = [
  validateFields,
  validateFields2,
  validateNewPatient,
];