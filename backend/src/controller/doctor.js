const httpStatusCode = require('../utils/httpStatusCode');
const { DoctorService } = require('../services');

const postLogin = async (req, res) => {
  const { email, password, role } = req.body;
  const { status, data } = DoctorService.postLogin(email, password, role);

  res.status(httpStatusCode(status)).json(data);
};

module.exports = {
  postLogin,
};
