/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('rating', [{
      appointment_id: 2,
      rating: 8,
    },
    {
      appointment_id: 3,
      rating: 1,
    }], { underscored: true });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('rating', null, {});
  },
};
