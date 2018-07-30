var db = require("../models");

module.exports = function(app) {

  // Displays all Comments in JSON Form
  app.get("/api/projects", function(req, res) {
    db.project.findAll({})
    .then(function(dbProjects) {
      res.json(dbProjects);
    })
  });

  //Posts New Comments to Database
  app.post("/api/projects", function(req, res){
    var newProject = req.body;
    db.project.create(newProject).then(function(dbProjects){
     res.json(dbProjects);
    })
  });
}

