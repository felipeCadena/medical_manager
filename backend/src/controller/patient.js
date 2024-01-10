const httpStatusCode = require('../utils/httpStatusCode');
const PatientService = require('../services/patient');

const getPatient = async (req, res) => {
  const { id } = req.user;
  const { status, data } = await PatientService.getById(id);

  return res.status(httpStatusCode(status)).json(data);
};

module.exports = {
  getPatient,
};