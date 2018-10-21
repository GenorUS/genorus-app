// Dependencies -----------------------------------------
const router = require("express").Router();
const application = require("./application");
const user = require("./user");

// Defining Routes to use -------------------------------
router.use("/application", application);
router.use("/users", user);

// Export ------------------------------------------------
module.exports = router;
