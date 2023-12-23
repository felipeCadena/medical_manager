const httpStatusCode = require('../utils/httpStatusCode');
const LoginService = require('../services/login');

const postLogin = async (req, res) => {
  const { email, password, role } = req.body;
  const {status, data} = LoginService.postLogin(email, password, role);

  res.status(httpStatusCode(status)).json(data);
}

module.exports = {
  postLogin,
};
