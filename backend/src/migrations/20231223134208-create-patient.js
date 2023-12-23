'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('patients', { 
      id: { 
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      fullName: Sequelize.STRING,
      image: Sequelize.STRING,
      gender: Sequelize.STRING,
      birth: Sequelize.STRING,
      CPF: Sequelize.STRING,
      email: { 
      type: Sequelize.STRING,
      unique: true
      },
      password: Sequelize.STRING,
      phone: Sequelize.STRING,
    });

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('patients');
  }
};
