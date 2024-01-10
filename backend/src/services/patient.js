const { PatientModel } = require('../models');

const getById = async (id) => {
  const patient = await PatientModel.findOne({ 
    where: { id }, 
    attributes: { exclude: ['password'] }, 
  });

  if (!patient) {
    return {
      status: 'NOT_FOUND',
      data: {
        message: 'Paciente não encontrado',
      },
    };
  }

  return {
    status: 'SUCCESSFUL',
    data: patient,
  };
};

module.exports = {
  getById,
};