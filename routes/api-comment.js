var db = require("../models");

module.exports = function(app) {

  // Displays all Comments in JSON Form
  app.get("/api/comments", function(req, res) {
    db.comment.findAll({})
    .then(function(dbComments) {
      res.json(dbComments);
    })
  })

  // Display Comment of a specific Id
  app.get('/api/comments/:id', function(req, res){
    console.log(req.params.id)
    db.comment.findOne({
      where: {
        id: req.params.id
      }
    })
    .then(function(dbComment){
      res.json(dbComment)
    })
  })

  // Update Comment
  app.put('/api/updateComment/:id', function(req, res){
    db.comment.update(
      {message: req.body.message},
      {
        where: {
          id: req.params.id
        }
      }
    ).then(function(dbUpdatedComment){
      res.json(dbUpdatedComment)
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
