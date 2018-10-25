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
    findAllUserApps: (req, res) => {
    db.Application.findAll({
      where: {
        UserId: req.params.id
      }, include: {
          model: db.Scholarship,
          include: {
              model: db.Company
          }
        }
    }).then((dbApplication) => {
      res.json(dbApplication);
    });
  },

  findById: (req, res) => {
    // Do something
      db.Application.findOne({
          where: {
              id: req.params.appid
          },
          include: {
              model: db.Scholarship
          }
      })
          .then(data => res.json(data))
          .catch(err => res.send(err))
  },
  create: (req, res) => {
    console.log(req.body);
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
