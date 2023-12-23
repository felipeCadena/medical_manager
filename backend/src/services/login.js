const { User } = require('../models');
const generateTokenAndVerify = require('../utils/generateTokenAndVerify');

const postLogin = async (email, password, role) => {
  const user = await User.findOne({ where: { email, password } });
  if (!user) {
    return {status: 'NOT_FOUND', data: { message: 'Não encontrado nenhum usuário' }}
  }

  if (user.password !== password) {
    return {status: 'UNAUTHORIZED', data: { message: 'Dados incorretos.' }}
  }

  const token = generateTokenAndVerify({...user, role });

  return {status: 'SUCCESSFUL', data: { token }}
}


module.exports = {
  postLogin,
};
