// Model for Application
module.exports = (sequelize, DataTypes) => {
  const Applications = sequelize.define("Application", {
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
    // Applicaation should belong to an User
    // Application can't be created without a User due to the foreign key constraint
    Application.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });

    // Application.belongTo(models.Company, {
    //   foreignKey: {
    //     allowNull: false
    //   }
    // })
  };

  return Application;
};
