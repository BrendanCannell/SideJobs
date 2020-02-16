// var mongoose = require("mongoose");
var passport = require("passport");
var User = require("../models/User");
// var Job = require('../models/Job')
// var userController = require('./userController')
const db = require("../models");

// Restrict access to root page
module.exports = {
  home: function (req, res) {
  db.User
      .then(res.redirect('/', { user: req.user }));
  },

  // Go to registration page
  register: function (req, res) {
    db.User
      .then(res.render('signup'));
  },

  // Post registration
  doRegister: function (req, res) {
    console.log(req.body)
    db.User
      .create({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          password: req.body.password,
        })
        .then(user => {
          console.log(user)
          passport.authenticate('local')(req, res, function () {
            res.json(user);
          });
        }) 
  },

  // Go to login page
  
  login: function (req, res) {
    db.User
      res.redirect('signin');
  },


// Post login
doLogin: function (req, res) {
  db.User
    passport.authenticate('local')(req, res, function () {
    res.redirect('/');
  });
},

  // logout
  logout: function (req, res) {
    db.User
      req.logout();
      res.redirect('/');
  }, 
}


