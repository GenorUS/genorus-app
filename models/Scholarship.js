// Model for Application
module.exports = (sequelize, DataTypes) => {
  const Scholarships = sequelize.define("Scholarship", {
    firstname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    date_of_birth: {
      type: DataTypes.DECIMAL,
      defaultValue: 0,
      allowNull: false
    },
    test: {
      type: DataTypes.STRING,
      allowNull: true
    },
    test: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });

  Scholarship.associate = (models) => {
    // Applicaation should belong to an User
    // Application can't be created without a User due to the foreign key constraint
    Scholarship.belongsTo(models.Company, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Scholarship;
};
