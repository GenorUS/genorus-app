// Dependencies -----------------------------------------
const router = require("express").Router();
<<<<<<< HEAD
=======

>>>>>>> 7ef49fe4b63dd68db429aeafe8575fa40075330a
const application = require("./application");
const user = require("./user");

// Defining Routes to use -------------------------------
router.use("/application", application);
router.use("/users", user);
<<<<<<< HEAD
=======

>>>>>>> 7ef49fe4b63dd68db429aeafe8575fa40075330a

// Export ------------------------------------------------
module.exports = router;
