// Dependencies -----------------------------------------
const router = require("express").Router();
const application = require("./application");
const user = require("./user");
const companies = require("./company");

// Defining Routes to use -------------------------------
router.use("/application", application);
router.use("/users", user);
router.use("/companies", companies);

// Export ------------------------------------------------
module.exports = router;
