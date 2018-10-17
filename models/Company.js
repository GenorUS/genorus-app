// Model for Application
module.exports = (sequelize, DataTypes) => {
  const Companies = sequelize.define("Company", {
    company_name: {
      type: DataTypes.STRING,
      defaultValue: 0,
      allowNull: false
    }
  });

  Company.associate = (models) => {
    // Applicaation should belong to an User
    // Application can't be created without a User due to the foreign key constraint
    Company.hasMany(models.Application, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Company;
};
