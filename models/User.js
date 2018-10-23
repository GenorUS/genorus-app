// Dependencies --------------------------------------------------------------
// Regular "bcrypt" can cause errors for Windows users. Use "bcrypt-nodejs".
const bcrypt = require("bcrypt-nodejs");

// Model for User --------------------------------------------------
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    firstname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        min: 8,
        max: 20
      }
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    companyID: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  });

  User.associate = (models) => {
    // Associating User with Applications
    // When an User is deleted, also delete any associated Applications
    User.hasMany(models.Application, {
      onDelete: "cascade"
    });
  };

  // Using .prototype on the "User" object to add a method, checks if password matches hashed password.
  // DO NOT USE ES6 SYNTAX ON bcrypt - 'this' does not work the same in arrow functions
  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };

  // .hook() is a sequelize method that runs before creation of this instance of "User" in the database
  // Password is hashed/salted before being entered into database
  // This is a best practice for protecting user data

  User.hook("beforeCreate", function(user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });

  return User;

};
