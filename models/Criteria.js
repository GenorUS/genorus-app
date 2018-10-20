// Model for Scholarship
module.exports = (sequelize, DataTypes) => {
  const Criteria = sequelize.define("Criteria", {
    placeholder1: {
      type: DataTypes.STRING,
      allowNull: false
    },
    placeholder2: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    placeholder3: {
      type: DataTypes.DOUBLE,
      allowNull: false
    }
  });

  Criteria.associate = (models) => {
    // Criteria should belong to a Scholarship
    // Criteria can't be created without a Scholarship due to the foreign key constraint
    Criteria.belongsTo(models.Scholarship, {
      foreignKey: {
        allowNull: false
      }
    });

  };

  return Criteria;
};
