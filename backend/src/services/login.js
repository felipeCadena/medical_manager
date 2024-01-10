const { Doctor, Patient } = require('../models');
const generateToken = require('../utils/generateToken');

const postLogin = async (email, password, role) => {
  let user;
  if (role === 'doctor') {
    user = await Doctor.findOne({ where: { email } });
  } else {
    user = await Patient.findOne({ where: { email } });
  }

  if (!user) {
    return { status: 'NOT_FOUND', data: { message: 'Não encontrado nenhum usuário' } };
  }

  if (user.password !== password) {
    return { status: 'UNAUTHORIZED', data: { message: 'Dados incorretos.' } };
  }

  const token = generateToken({ ...user, role });

  return { status: 'SUCCESSFUL', data: { token } };
};

const postLoginAdmin = async (email, password) => {
  if (email !== 'felipes@medicalmanager.com' || password !== 'felipes123') {
    return { status: 'UNAUTHORIZED', data: { message: 'Dados incorretos.' } };
  }

  const token = generateToken({ email, role: 'admin' });

  return { status: 'SUCCESSFUL', data: { token } };
};

module.exports = {
  postLogin,
  postLoginAdmin,
};
