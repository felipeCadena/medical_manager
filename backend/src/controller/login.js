const httpStatusCode = require('../utils/httpStatusCode');
const { LoginService } = require('../services');

const postLoginDoctor = async (req, res) => {
  const { email, password } = req.body;
  const role = 'doctor';
  const { status, data } = await LoginService.postLogin(email, password, role);

  return res.status(httpStatusCode(status)).json(data);
};

const postLoginPatient = async (req, res) => {
  const { email, password } = req.body;
  const role = 'patient';
  const { status, data } = await LoginService.postLogin(email, password, role);

  return res.status(httpStatusCode(status)).json(data);
};

const postLoginAdmin = async (req, res) => {
  const { email, password } = req.body;
  const { status, data } = await LoginService.postLoginAdmin(email, password);

  return res.status(httpStatusCode(status)).json(data);
};

module.exports = {
  postLoginDoctor,
  postLoginPatient,
  postLoginAdmin,
};
