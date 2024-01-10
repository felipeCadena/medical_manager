/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('rating', { 
      appointment_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'appointments',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
      },
      rating: Sequelize.INTEGER,
    }, { underscored: true });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('rating');
  },
};
