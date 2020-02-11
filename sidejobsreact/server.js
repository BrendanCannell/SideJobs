const express = require("express");
const session = require("express-session");
const User = require('./models/User');
const mongoose = require('mongoose');
const app = express();

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/node-auth')
  .then(() => console.log('connection succesful'))
  .catch((err) => console.error(err));
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

// const passport = require("./config/passport");
const routes = require("./routes");



const PORT = process.env.PORT || 8080;
// const db = require("./models");


app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/sidejobdb");

// require("./routes/html-routes.js")(app);
// require("./routes/api-routes.js")(app);



// **** GABE ************
// you need to look at these functins because when running node server.js it says that they are not functions and im not familiar with passport so i don't know where to start with them
// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());
// **** GABE ************




  app.listen(PORT, function() {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });
// });
