/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('doctors', { 
      id: { 
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      full_name: Sequelize.STRING,
      gender: Sequelize.STRING,
      email: { 
        type: Sequelize.STRING,
        unique: true,
      },
      password: Sequelize.STRING,
      image: Sequelize.STRING,
      CRM: Sequelize.INTEGER,
      expertise_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'expertise',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
    }, {
      underscored: true,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('doctors');
  },
};
