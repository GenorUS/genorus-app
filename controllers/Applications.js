// Dependencies ------------------------------------------------
const db = require("../models");

// Defining methods for applications -----------------------------
module.exports = {
  findAll: (req, res) => {
    db.Application.findAll({
      where: {
        // change this to req.body if needed, links application to a specific user
        UserId: req.params.userId
      }
    }).then((dbApplication) => {
      res.json(dbApplication);
    });
  },
  create: (req, res) => {
    db.Application.create(req.body)
    .then((dbApplication) => {
      res.json(dbApplication);
    });
  },
  remove: (req, res) => {
    db.Application.destroy({
      where: {
        id: req.params.id
      }
    }).then((dbApplication) => {
      res.json(dbApplication);
    });
  }
};
