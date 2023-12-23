'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('expertise', { 
      id: { 
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      name: Sequelize.STRING,
    });
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.dropTable('expertise');
  }
};
