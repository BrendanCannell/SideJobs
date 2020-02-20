// var passport = require('passport')
//   , LocalStrategy = require('passport-local').Strategy;
// const User = require('../models/User');
// const keys = require('./keys');


// passport.use(new LocalStrategy(
//     {usernameField:"email", passwordField:"password"},
//     function(email, password, done) {
//         console.log("this works!")
//         User.findOne({ email: email }, function (err, user) {
//           if (err) { return done(err); }
//           if (!user) {
//             return done(null, false, { message: 'Incorrect email.' });
//           }
//           if (!user.validPassword(password)) {
//             return done(null, false, { message: 'Incorrect password.' });
//           }
//           return done(null, user);
//         });
//       }
// ));
// passport.serializeUser(User.serializeUser((user, done)=> {
//     done(null, user.id);
// }));
// passport.deserializeUser(User.deserializeUser((id, done)=> {
//     User.findById(id).then((user) => {
//         done(null, user);
//     })
// }));