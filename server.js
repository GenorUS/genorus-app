// Dependencies ------------------------------------
const express = require("express");
const routes = require("./routes");
const bodyParser = require('body-parser');
const db = require("./models");

//Added for Passport
const passport = require("passport");
require("./config/passport");

// Express and PORT ------------------------------------
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here --------------------------
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Added for Passport
app.use(passport.initialize());
app.use(passport.session());

// Serve up static assets (usually on heroku) ------
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view --------------------
app.use(routes);

// Start the API server and DB ----------------------
db.sequelize.sync().then(() => {
  app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Connected on localhost:${PORT}`);
  });
});
