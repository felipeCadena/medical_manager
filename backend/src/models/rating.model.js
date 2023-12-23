module.exports = (sequelize, DataTypes) => {
  const Rating = sequelize.define(
  'Rating',
  { 
    appointment_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'appointment',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    rating: DataTypes.INTEGER,
    timestamps: false,
    underscored: true,
    tableName: 'rating',
  });

  Rating.associate = (models) => {
    Rating.belongsTo(models.Appointment,
      { foreignKey: 'appointmentId', as: 'appointment' });
  };

  return Rating;
};
