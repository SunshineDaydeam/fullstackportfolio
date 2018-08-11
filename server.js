

require("dotenv").config();
var express = require("express");
var db = require("./models");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var session = require("express-session");

var PORT = process.env.PORT || 3000;
console.log(PORT)
var app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

// Cookies for Editing Post
var sess = {
  secret: 'This is an exceedingly long high entropy string for encrypting cookie values',
  cookie: {
    secure:false,
    resave: false,
    saveUninitialized: true,
    rolling: true,
    id:"fun"
  }
}

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// API Routes
require("./routes/api-comment")(app);
require("./routes/api-messages")(app);
require("./routes/api-projects")(app);

// HTML Routes
require("./routes/htmlRoutes")(app);
// require("./routes/html-comments")(app);
// require("./routes/html-messages")(app);
// require("./routes/html-projects")(app);
// require("./routes/html-users")(app);

// Run Server
db.sequelize.sync().then(function(){
  app.listen(PORT, function(){
    console.log("Server listening on port:", PORT);
  });
});

module.exports = app;