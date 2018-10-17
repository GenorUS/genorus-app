const router = require("express").Router();
const apifiletonameRoutes = require("./apifiletoname");
const companyRoutes = require("./company");
const userRoutes = require("./user");
const authRoutes = require("./auth");

// Book routes
router.use("/article", apifiletonameRoutes);
router.use("/company", companyRoutes);
router.use("/user", userRoutes);
router.use("/user", authRoutes);

module.exports = router;
