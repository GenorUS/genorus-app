// Dependencies ------------------------------------------------
const db = require("../models");

// Defining methods for user account creation/removal ----------
module.exports = {
  findAll: (req, res) => {
        return db.Company.findAll({ include: [db.Scholarship]}).then(data => res.json(data))
    
  },
  getScholarships: (req, res) => {
        return db.Company.findOne({ where: {
            id: req.params.id
        }, include: [db.Scholarship]}).then(data => res.json(data))
    
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