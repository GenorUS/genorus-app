// Model for Scholarship
module.exports = (sequelize, DataTypes) => {
  const Scholarship = sequelize.define("Scholarship", {
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

  Scholarship.associate = (models) => {
    // Scholarship should belong to a Company
    // Scholarship can't be created without a Company due to the foreign key constraint
    Scholarship.belongsTo(models.Company, {
      foreignKey: {
        allowNull: false
      }
    });

    // Scholarship has many applications
    // If scholarship is deleted by company, cascade to delete any associated applications
    Scholarship.hasMany(models.Application, {
      foreignKey: {
        allowNull: false,
        onDelete: "cascade"
      }
    });
  };

  return Scholarship;
};
