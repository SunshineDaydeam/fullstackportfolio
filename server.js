require("dotenv").config();
var express = require("express");
var db = require("./models");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

var PORT = process.env.PORT || 3000;
var app = express();

db.sequelize.sync().then(function(){
  app.listen(PORT, function(){
    console.log("Server listening on port:", PORT);
  });
});