/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('expertise', [{
      id: 1,
      name: 'Cardiologista',
    },
    {
      id: 2,
      name: 'Ortopedista',
    },
    {
      id: 3,
      name: 'Pediatra',
    }], { 
      underscored: true,
      timestamps: false, 
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('expertise', null, {});
  },
};
