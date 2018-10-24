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
    dob_month: {
      type: DataTypes.DECIMAL,
      defaultValue: 0,
      allowNull: false
    },
    dob_day: {
      type: DataTypes.DECIMAL,
      defaultValue: 0,
      allowNull: false
    },
    dob_year: {
      type: DataTypes.DECIMAL,
      defaultValue: 0,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true
    },
    address2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    city: {
      type: DataTypes.STRING,
      allowNull: true
    },
    state: {
      type: DataTypes.STRING,
      allowNull: true
    },
    zipcode: {
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
    act_score: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    sat_score: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    essay: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    company: {
      type: DataTypes.STRING,
      allowNull: false
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
