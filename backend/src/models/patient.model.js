module.exports = (sequelize, DataTypes) => {
  const Patient = sequelize.define(
    'Patient',
    { 
      id: { 
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      fullName: DataTypes.STRING,
      image: DataTypes.STRING,
      gender: DataTypes.STRING,
      birth: DataTypes.DATE,
      cpf: DataTypes.STRING,
      email: { 
        type: DataTypes.STRING,
        unique: true,
      },
      password: DataTypes.STRING,
      phone: DataTypes.STRING,
    },
    {
      timestamps: false,
      underscored: true,
      tableName: 'patients',
    },
  );

  return Patient;
};
