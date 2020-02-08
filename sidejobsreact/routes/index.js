const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
var express = require('express');
var auth = require("../controllers/AuthController.js");

// API Routes
router.use("/api", apiRoutes);
console.log("into first index")

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// restrict index for logged in user only
router.get('/', auth.home);

// route to register page
router.get('/signup', auth.register);

// route for register action
router.post('/signup', auth.doRegister);

// route to login page
router.get('/signin', auth.login);

// route for login action
router.post('/signin', auth.doLogin);

// route for logout action
router.get('/signout', auth.logout);


module.exports = router;



