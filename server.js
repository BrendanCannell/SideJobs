const express = require("express");
// const session = require("express-session");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"))
}

// mongoose.Promise = global.Promise;

// mongoose.connect('mongodb://localhost/node-auth')
//   .then(() => console.log('connection succesful'))
//   .catch((err) => console.error(err));
// const passport = require('passport');
// const LocalStrategy = require('passport-local').Strategy;

// const passport = require("./config/passport");
const routes = require("./routes");



const PORT = process.env.PORT || 8080;
// const db = require("./models");


// app.use(session({
//     secret: 'keyboard cat',
//     resave: false,
//     saveUninitialized: false
// }));
// app.use(passport.initialize());
// app.use(passport.session());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://user1:password1@ds113630.mlab.com:13630/heroku_2lpmjp0s");



// require("./routes/html-routes.js")(app);
// require("./routes/api-routes.js")(app);



// **** GABE ************
// you need to look at these functins because when running node server.js it says that they are not functions and im not familiar with passport so i don't know where to start with them

// **** GABE ************




  app.listen(PORT, function() {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });
// });
