const router = require("express").Router();


// Matches with "/api/user"
router.route("/")
  .post((req, res) => {
    
    //TODO CREATE A USER
    //TODO GENERATE AUTHENTICATION TOKEN
  });
  


router
  .route("/:id")
  .get((req, res) => {
    
    // TODO GET USER INFO AND APPS COMPLETE ON LOGIN


  })
  .put((req, res) => {

    //TODO UPDATE A USER
  })
  .delete((req, res) => {
    
    //TODO DELETE A USER FOM EVERYTHING
  });

module.exports = router;