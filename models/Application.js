// Model for Application
module.exports = (sequelize, DataTypes) => {
  const Application = sequelize.define("Application", {
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

  Application.associate = (models) => {
    // Application should belong to a User
    // Application can't be created without a User due to the foreign key constraint
    Application.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });

    // Application should belong to a scholarship
    Application.belongsTo(models.Scholarship, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Application;
};
