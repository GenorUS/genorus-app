const router = require("express").Router();
const apifiletonameRoutes = require("./apifiletoname");

// Book routes
router.use("/article", apifiletonameRoutes);

module.exports = router;
