// Dependencies ------------------------------------------------
const db = require("../models");

// Defining methods for user account creation/removal ----------
module.exports = {
  create: (req, res) => {
    // NOTE: this is for when a user first create an account
    // redirect logs them in immediately, remove if needed
    db.User.create({
      email: req.body.email,
      password: req.body.password,
      firstname: req.body.firstname,
      lastname: req.body.lastname
    }).then(() => {
      res.redirect(307, "/api/login");
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
