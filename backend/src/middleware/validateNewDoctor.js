const { Doctor } = require('../models');

const validateFields = (req, res, next) => {
  const { CRM, image, fullname, gender } = req.body;
  if (!CRM || !image || !fullname || !gender) {
    return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
  }
  
  next();
};

const validateFields2 = (req, res, next) => {
  const { email, password, expertise } = req.body;
  if (!email || !password || expertise) {
    return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
  }

  next();
};

const validateNewDoctor = async (req, res, next) => {
  const { email } = req.body;
  const doctor = await Doctor.findOne({ where: { email } });

  if (doctor) {
    return res.status(401).json({ message: 'Email já cadastrado' });
  }
  next();
};

module.exports = [
  validateFields,
  validateFields2,
  validateNewDoctor,
];