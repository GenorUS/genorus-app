// Dependencies ------------------------------------------------
const db = require("../../models");
// const passport = require("../../config/passport");
// Here I'm adding my own JWT stuff
const passport = require("passport");
const settings = require("../../config/settings");
require("../../config/passport")(passport);
const jwt = require('jsonwebtoken');

const express = require("express");
const router = express.Router();
const isAuthenticated = require("../../config/middleware/isAuthenticated");
const UsersController = require("../../controllers/Users.js");

// Routes ------------------------------------------------------
// -----------------------------------------------------------------------------------
// NOTE: ROUTES FOR USER LOGIN/LOGOUT/SIGNUP/USERDATA --------------------------------
// POST "/api/login" - passport.authenticate middleware with our local strategy
// if credentials valid, login successful. otherwise, error.
// -----------------------------------------------------------------------------------

// POST "/api/users/login" - for logging into site and authenticating users
router
  // .route("/login", passport.authenticate("local"))
  .post("/login", (req, res) => {
      db.User.findOne({
          where: {
              email: req.body.email
          }
      })
          .then(user => {

                let password = user.dataValues.password;
                console.log('REQ PASSWORD ' + req.body.password);
              if(db.User.validPassword(req.body.password,password)) {
                  console.log("This is User " + user);
                  // if user is found and password is right create a token
                  var token = jwt.sign(user.toJSON(), settings.secret);
                  // return the information including token as JSON
                  return res.json({success: true, token: 'JWT ' + token});
              };
              //If not authenticated return a bad status
              return res.status(401).send({success: false, msg: 'Authentication failed. Wrong password.'});
          })
          .catch(err => {

              return res.status(401).send({success: false, msg: 'Authentication failed. Wrong password.'});
          });
  });

// POST "/api/users/signup" - for sign up form, hashing/salting happens in User.js sequelize model.
router
  .route("/signup")
  .post(UsersController.create);

// GET "/api/users/user_data" - for getting some data about our user to be used client side
router
  .route("/user_data")
  .post((req, res) => {
    res.send(res.body);
  })
  .get(UsersController.getData);

// GET "/api/users/logout" - for logging user out
router
  .route("/logout")
  .get(UsersController.logout);


module.exports = router;
