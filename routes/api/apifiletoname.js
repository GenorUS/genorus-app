// Dependencies -----------------------------------------------
const router = require("express").Router();
const appController = require("../../controllers/Applications.js");

// Defining Routes ---------------------------------------------

// Matches with "/api/application"
router
  .route("/")
  .get(appController.findAll)
  .post(appController.create);

// Matches with "/api/application/:id"
router
  .route("/:id")
  .get(appController.findById)
  .delete(appController.remove);

module.exports = router;
