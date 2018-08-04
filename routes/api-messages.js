var db = require("../models");

module.exports = function(app) {

  // // Displays all Comments in JSON Form
  // app.get("/api/messages", function(req, res) {
  //   db.message.findAll({})
  //   .then(function(dbMessages) {
  //     res.json(dbMessages);
  //   })
  // })

  //Posts New Comments to Database
  app.post("/api/messages", function(req, res){
    var newMessage = req.body;
    db.message.create(newMessage).then(function(dbMessages){
     res.json(dbMessages);
    })
  })
}