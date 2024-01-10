/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('patients', [{
      id: 1,
      full_name: 'Felipe Rodrigues',
      image: 'caminho_imagem',
      gender: 'M',
      birth: '1990-01-01',
      cpf: '13412354670',
      email: 'felipedev@gmail.com',
      password: 'ecchihentai',
      phone: '31-98756-1029',
    },
    {
      id: 2,
      full_name: 'Felipe Cadena',
      image: 'caminho_imagem',
      gender: 'M',
      birth: '1986-02-02',
      cpf: '16643296700',
      email: 'felipecadenadev@gmail.com',
      password: 'shonen',
      phone: '21-98746-8950',
    },
    ], { 
      underscored: true,
      timestamps: false, 
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('patients', null, {});
  },
};
