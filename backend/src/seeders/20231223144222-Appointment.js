/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('appointments', [{
      id: 1,
      status: 'AGENDADA',
      date: '2024-02-21 14:00:00',
      doctor_id: 2,
      patient_id: 1,
    },
    {
      id: 2,
      status: 'REALIZADA',
      date: '2023-11-10 15:00:00',
      doctor_id: 3,
      patient_id: 2,
    },
    {
      id: 3,
      status: 'REALIZADA',
      date: '2023-12-20 10:00:00',
      doctor_id: 1,
      patient_id: 2,
    }], { 
      underscored: true,
      timestamps: false, 
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('appointments', null, {});
  },
};
