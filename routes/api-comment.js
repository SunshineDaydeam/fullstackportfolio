var db = require("../models");

module.exports = function(app) {

  // Displays all Comments in JSON Form
  app.get("/api/comments", function(req, res) {
    db.comment.findAll({})
    .then(function(dbComments) {
      res.json(dbComments);
    })
  })

  //Posts New Comments to Database
  app.post("/api/comments", function(req, res){
    var newComment = req.body;
    db.comment.create(newComment).then(function(dbComments){
     res.json(dbComments);
    })
  })

}