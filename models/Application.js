// Model for Application
// TODO -- APP -- CITY/STATE/ZIP OF SCHOOL - DROPDOWN TO GET SCHOOL ID's
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
    dateOfBirth: {
      type: DataTypes.DECIMAL,
      defaultValue: 0,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ethnicity: {
      type: DataTypes.STRING,
      allowNull: true
    },
    highSchoolID: {
      type: DataTypes.STRING,
      allowNull: true
    },
    collegeID: {
      type: DataTypes.STRING,
      allowNull: true
    },
    GPA: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    actScore: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    satScore: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    essayText: {
      type: DataTypes.TEXT,
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
