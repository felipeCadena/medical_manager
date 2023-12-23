module.exports = (sequelize, DataTypes) => {
  const Expertise = sequelize.define(
  'Expertise',
  { 
    id: { 
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    name: DataTypes.STRING,
    timestamps: false,
    underscored: true,
    tableName: 'expertise',
  });

  Expertise.associate = (models) => {
    Expertise.hasMany(models.Doctor,
      { foreignKey: 'expertiseId', as: 'doctor' });
  };

  return Expertise;
};
