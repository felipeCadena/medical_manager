module.exports = (sequelize, DataTypes) => {
  const Appointment = sequelize.define(
  'Appointment',
  { 
    id: { 
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    status: DataTypes.STRING,
    date: { 
      type: DataTypes.DATE,
      unique: true,
      },
    doctor_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'doctor',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    patient_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'patient',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    timestamps: false,
    underscored: true,
    tableName: 'expertise',
  });

  Appointment.associate = (models) => {
    Appointment.belongsTo(models.Doctor,
      { foreignKey: 'doctorId', as: 'doctor' });

    Appointment.belongsTo(models.Patient,
        { foreignKey: 'patientId', as: 'patient' });
  };

  return Appointment;
};
