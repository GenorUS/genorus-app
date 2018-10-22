// Dependencies ------------------------------------------------
const db = require("../models");

// Defining methods for user account creation/removal ----------
module.exports = {
  create: (req, res) => {
    // NOTE: this is for when a user first create an account
    // redirect logs them in immediately, remove if needed
    let {email, password, userName, firstName, lastName } = req.body;
    db.User.create({
      email: email,
      username: userName,
      password: password,
      firstname: firstName,
      lastname: lastName
    }).then((data) => {
      
      res.json(data.dataValues);
    }).catch((err) => {
      console.log(err);
      res.json(err);
    });
  },
  remove: (req, res) => {
    db.User.destroy({
      where: {
        id: req.params.id
      }
    })
    .then((dbUser) => {
      res.json(dbApplication);
    });
  },
  getData: (req, res) => {
    if (!req.user) {
      res.json({});
    }
    else {
      res.json({
        email: req.user.email,
        id: req.user.id,
        firstname: req.user.firstname,
        lastname: req.user.lastname
      });
    }
  },
  login: (req, res) => {
    res.json("/members");
  },
  logout: (req, res) => {
    req.logout();
    res.redirect("/");
  }
};
