
var db = require("../models");

module.exports = function(app) {
// get all burgers
  app.get("/api/burgers/", function(req, res) {
    db.Burger.findAll({})
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });
  // Get route for retrieving a single burger
  app.get("/api/burgers/:id", function(req, res) {
    db.Burger.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbBurger) {
        res.json(dbBurger);
      });
  });

  // POST route for saving a new post
  app.post("/api/burgers", function(req, res) {
    console.log(req.body);
    db.Burger.create({
      burger_name: req.body.burger_name,
      devoured: req.body.devoured
    })
      .then(function(dbBurger) {
        res.json(dbBurger);
      });
  });

  // DELETE route for devouring burgers
  app.delete("/api/posts/:id", function(req, res) {
    db.Burger.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbBurger) {
        res.json(dbBurger);
      });
  });

};
