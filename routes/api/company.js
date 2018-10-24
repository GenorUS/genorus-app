const router = require("express").Router();
const companyController = require("../../controllers/Companies");


// Matches with "/api/companies"
router.route("/")
  .get(companyController.findAll)
  .post();

router.route("/:id")
  .get(companyController.getScholarships)

module.exports = router;


// company has many scholarships
// scholarship has 1 company
//scholarship has many question
//
