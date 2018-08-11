var db = require("../models");

module.exports = function(app) {
  // Home Page
  app.get("/", function(req, res) {
    res.render("home", {

    });
  });
  // About Page
  app.get("/about", function(req, res) {
    res.render("about", {

    });
  });
  // Contact Me Page
  app.get("/contact", function(req, res) {
    res.render("contactMe", {

    });
  });
  // Portfolio Page *
  app.get("/portfolio", function(req, res) {
    db.project.findAll({}).then(function(dbProjects){
      res.render("portfolio", {
        projects: dbProjects
      });
    })
  });
  // References Page
  app.get("/references", function(req, res) {
    db.comment.findAll({}).then(function(dbComments){
      res.render("referrals", {
        comments: dbComments
      });  
    })
  });
  // Update Rederence Page
  app.get("/updateMyComments", function(req, res){
    db.comment.findAll(
      {
        where: {
          // **** CHANGE WITH COOKIES ***+
          id: 1
        }
      }
    ).then(function(myComment){
      res.render("updateCommentPage", {
        comments: myComment
      })
    })  
  })

  // Admin Page
  // * Add/Edit Projects
  // * Delete Comments
  // * View Direct Messages
  app.get("/admin", function(req, res) {
    res.render("admin", {
      msg: "Welcome!"
    });
  });

  // app.get("*", function(req, res){
  //   res.render("home", {

  //   });
  // })
};
