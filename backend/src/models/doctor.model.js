module.exports = (sequelize, DataTypes) => {
  const Doctor = sequelize.define(
  'Doctor',
  { 
    id: { 
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    fullName: DataTypes.STRING,
    gender: DataTypes.STRING,
    email: { 
    type: DataTypes.STRING,
    unique: true
    },
    password: DataTypes.STRING,
    image: DataTypes.STRING,
    CRM: DataTypes.INTEGER,
    expertise_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'expertise',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
  },
  {
    timestamps: false,
    underscored: true,
    tableName: 'doctors',
  });

  Doctor.associate = (models) => {
    Doctor.belongsTo(models.Expertise,
      { foreignKey: 'expertiseId', as: 'expertise' });
  };

  return Doctor;
};
