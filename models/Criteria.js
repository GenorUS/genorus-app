// Model for Scholarship
module.exports = (sequelize, DataTypes) => {
  const Criteria = sequelize.define("Criteria", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    count: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    amount: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    bannerURL: {
      type: DataTypes.STRING,
      allowNull: true
    },
    essayQuestion: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    minEssayLength: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
  });

  Criteria.associate = (models) => {
    // Criteria should belong to a Company
    // Criteria can't be created without a Company due to the foreign key constraint
    Criteria.belongsTo(models.Company, {
      foreignKey: {
        allowNull: false
      }
    });

    // Criteria has many applications
    // If criteria is deleted by company
    Criteria.hasMany(models.Application, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Criteria;
};
