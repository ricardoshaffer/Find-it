// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

  app.get("/", function(req, res) {
    // If the user already has an account send them to the members page
    // if (req.user) {
    //   res.render(path.join(__dirname, "../views/members"), {});
    // }
    res.render(path.join(__dirname, "../views/index"), {});
  });
  
  app.get("/map", function(req, res){
    res.render('map', {layout: 'maps'})
  })

  app.get("/signup", function(req,res){
    res.render(path.join(__dirname, "../views/signup"))
  })

  app.get("/login", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.render(path.join(__dirname, "../views/members"), {});
    } else {
    res.render(path.join(__dirname, "../views/login"), {});
    }
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, function(req, res) {
    res.render(path.join(__dirname, "../views/members"), {});
  });

};
