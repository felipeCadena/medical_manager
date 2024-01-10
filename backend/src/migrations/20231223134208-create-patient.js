/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('patients', { 
      id: { 
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      full_name: Sequelize.STRING,
      image: Sequelize.STRING,
      gender: Sequelize.STRING,
      birth: Sequelize.STRING,
      cpf: Sequelize.STRING,
      email: { 
        type: Sequelize.STRING,
        unique: true,
      },
      password: Sequelize.STRING,
      phone: Sequelize.STRING,
    }, {
      underscored: true,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('patients');
  },
};
