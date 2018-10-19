// Dependencies ------------------------------------
const express = require("express");
const routes = require("./routes");

// Express and PORT ------------------------------------
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here --------------------------
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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
