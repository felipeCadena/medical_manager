'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('doctors', [{
      id: 1,
      fullName: 'Pereira da Silva',
      gender: 'M',
      email: 'pereira@gmail.com',
      password: 'pereirinha',
      image: 'caminho-imagem',
      CRM: 54631,
      expertise_id: 1,
    },
    {
      id: 2,
      fullName: 'Fatima Almeida',
      gender: 'F',
      email: 'fatinha@gmail.com',
      password: 'fafa',
      image: 'caminho-imagem',
      CRM: 34267,
      expertise_id: 3,
    },
    {
      id: 3,
      fullName: 'Carlos Mendes',
      gender: 'M',
      email: 'carlim@gmail.com',
      password: 'cacava',
      image: 'caminho-imagem',
      CRM: 97049,
      expertise_id: 2,
    }], { timestamps: false });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('doctors', null, {});
  }
};
