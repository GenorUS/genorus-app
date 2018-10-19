// Model for Company
module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define("Company", {
    company_name: {
      type: DataTypes.STRING,
      defaultValue: 0,
      allowNull: false
    }
  });

  Company.associate = (models) => {
    // Scholarship can't be created without a Company due to the foreign key constraint
    Company.hasMany(models.Scholarship, {
      foreignKey: {
        allowNull: false,
        onDelete: "cascade"
      }
    });
  };

  return Company;
};
