  var passport = require('passport')
  , FacebookStrategy = require('passport-facebook').Strategy;
  const User = require('../../controllers/user'),
        user = new User();

passport.use(new FacebookStrategy({
    clientID: 270451527012586,
    clientSecret:"94fa180df0fb0d951c80966b5fe14e88",
    callbackURL: "http://localhost:3000",
    passReqToCallback: true,

  },
  function(req,accessToken, refreshToken, profile, done) {
    User.signup(req).then((user)=>{
        console.log('Facebook working')
      if (err) { return done(err); }
      done(null, user);
    });
  }
));