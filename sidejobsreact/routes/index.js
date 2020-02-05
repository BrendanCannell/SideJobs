const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;

// var express = require('express');
// var router = express.Router();
// var auth = require("../controllers/AuthController.js");

// // restrict index for logged in user only
// router.get('/', auth.home);

// // route to register page
// router.get('/register', auth.register);

// // route for register action
// router.post('/register', auth.doRegister);

// // route to login page
// router.get('/login', auth.login);

// // route for login action
// router.post('/login', auth.doLogin);

// // route for logout action
// router.get('/logout', auth.logout);
