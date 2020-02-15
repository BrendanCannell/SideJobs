var mongoose = require("mongoose");
var passport = require("passport");
var User = require("../models/User");
var Job = require('../models/Job')
var userController = require('./userController')


// Restrict access to root page
module.exports = {
  home: function (req, res) {
    User
      .then(res.redirect('/', { user: req.user }));
  },

  // Go to registration page
  register: function (req, res) {
    User
      .then(res.render('signup'));
  },

  // Post registration
  doRegister: function (req, res) {
    console.log(req.body)
    User
      .create(
        {
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          phoneNumber: req.body.phoneNumber,
          email: req.body.email,
          password: req.body.password,
          zip: req.body.zip,
          city: req.body.city
        },
        // req.body.password,
        function (err, user) {
          // if (err) {
          //   return res.redirect('signup', { user: user });
          // }

          passport.authenticate('local')(req, res, function () {
            // res.redirect('/');
          });
        }
      );
  },

  // Go to login page
  
  login: function (req, res) {
    User
      res.redirect('signin');
  },


// Post login
doLogin: function (req, res) {
  User
    passport.authenticate('local')(req, res, function () {
    res.redirect('/');
  });
},

  // logout
  logout: function (req, res) {
    User
      req.logout();
      res.redirect('/');
  }, 
}


