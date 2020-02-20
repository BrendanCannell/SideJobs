const express = require("express");
const session = require("express-session");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const cookieSession = require('cookie-session');
const keys = require('./passport/keys');
// const passport = require('passport');

// app.use(cookieSession({
//   name: 'session',
//   maxAge: 24 * 60 * 60 * 1000,
//   keys: [keys.session.cookieKey]
// }))

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/node-auth')
  .then(() => console.log('connection succesful'))
  .catch((err) => console.error(err));
// const passport = require('passport');
// const LocalStrategy = require('passport-local').Strategy;

// const passport = require("./config/passport");
const routes = require("./routes");



const PORT = process.env.PORT || 8080;
// const db = require("./models");


app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));
// app.use(passport.initialize());
// app.use(passport.session());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/sidejobdb");

// require("./routes/html-routes.js")(app);
// require("./routes/api-routes.js")(app);


  app.listen(PORT, function() {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });
// });
