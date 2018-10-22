const router = require("express").Router();


// Matches with "/api/articles"
router.route("/:id")
  .get((req, res) => {

    // TODO call the database to get the information of a company and the scholarship they hold


  })
  .post();

module.exports = router;


// company has many scholarships
// scholarship has 1 company
//scholarship has many question
//