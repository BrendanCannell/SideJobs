var mongoose = require("mongoose");
// import { redirect} from "react-router-dom";
var passport = require("passport");
var User = require("../models/User");
// var Job = require('../models/Job')
// var userController = require('./userController')
const db = require("../models");
const local = require("../passport/index")


// Restrict access to root page
module.exports = {
  home: function (req, res) {
  db.User
      .then(res.redirect('/', { user: req.user }));
  },

  // Go to registration page
  register: function (req, res) {
    db.User
      .then(res.redirect('signup'));
  },

  // Post registration
  doRegister: function (req, res) {
    console.log(req.body)
    db.User
      .create({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          phoneNumber: req.body.phoneNumber,
          email: req.body.email,
          password: req.body.password,
          zip: req.body.zip,
          city: req.body.city
        })
        .then(user => {
          console.log(res.body)
          db.User.find({email: req.body.email}).then( res => {
            console.log(res)

              //Cant figure out how to grab the id from the mongo object but once that is grabbed itll send the id to the necessary routes

            res.redirect('userprofile:id')
        //   console.log(user)
        //   passport.authenticate('local')(req, res, function (err, user, info) {
        //     console.log({user, err, info})

          // res.json(user);
            
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
  db.User.find({email: req.body.email}).then( res => {
    console.log(res)
    if (!User) {
      res.redirect ('/signup');
    } 
    // else if(req.body.password === user.password){
      // res.redirect('/');

     else {
      res.redirect ('/userprofile:id')
    } 
  })
},

  // logout
  logout: function (req, res) {
    db.User
      req.logout();
      res.redirect('/');
  }, 
}


