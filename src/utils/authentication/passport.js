
const jwt=require('jsonwebtoken');
const bcrypt = require('bcrypt')
const mailer = require('../mail')


require('dotenv').config()
    const User = require('../../controllers/user'),
        user = new User();
        var passport = require("passport");
        var LocalStrategy = require("passport-local").Strategy,
            FacebookStrategy = require('passport-facebook').Strategy,
            LinkedInStrategy = require('passport-linkedin-oauth2').Strategy

        passport.use(new FacebookStrategy(
            {
            clientID: 270451527012586,
            clientSecret:"94fa180df0fb0d951c80966b5fe14e88",
            callbackURL: "http://localhost:3001/api/user/auth/facebook/callback",
            profileFields: ['id', 'displayName', 'name', 'photos', 'email'],

          },
          async function(accessToken, refreshToken, profile, done) {
              console.log(profile)

            var data ={
                username: profile.displayName,
                password:''
            }

            await user.signup(data)
                .then((user)=>{
                    console.log('userrrrrrrrrrrrr'+user)
                    //if (err) { return done(err); }
                    done(null, user);
            });
          }

        ));



        var LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
 
        passport.use(new LinkedInStrategy({
          clientID: "86efydsdu0mocj",
          clientSecret: "VRqIkBsdTMN7hZ5T",
          callbackURL: "http://localhost.auth0.com:3001/api/user/auth/linkedin/callback",
          scope: ['r_emailaddress', 'r_basicprofile'],
        }, function(accessToken, refreshToken, profile, done) {

            console.log('profileeeeeeeeee')
            console.log(profile)

          // asynchronous verification, for effect...
          process.nextTick(function () {
       
            return done(null, profile);
          });
        }));

        passport.use(new LocalStrategy(
            {
                passReqToCallback: true,
                passResToCallback: true
            },
          // Our user will sign in using an email, rather than a "username"
          async function(req,username, password, done) {
            // When a user tries to sign in this code runs
            console.log("bodyyyyyyy")
            console.log(req.body)
            if(req.body.action === 'signup'){
                user.signup(req)
                    .then((user)=>{
                        //if (err) { return done(err); }
                        if(user['dataValues'])
                            mailer.sendMail(user['dataValues'].email)
                        console.log(user)
                        if(user.id)
                            user.token = jwt.sign({userId:user.id},process.env.tokenKey)
                        return done(null, user);
                    });           
            }

            else
            user.signin(req)
                .then(async function(dbUser) {
                    if (!dbUser) {
                        return done(null, false, {
                        message: {
                            message: "Username Available for acount creation.",
                            action:"Do you want to create the accout with the provided info?"
                        }

                        });
                    }

                    var logged =  await bcrypt.compare(req.body.password,dbUser.password)
                    dbUser.token = logged? jwt.sign({userId:user.id},process.env.tokenKey):''

                    
                     if (!logged) {
                        return done(null, false, {
                        message: "Incorrect credentials."
                        });
              }
              // If none of the above, return the user
              console.log('returninnnnnng'+dbUser.password)

              //dbUser.token =jwt.sign({userId:user.id},process.env.tokenKey);
              return done(null, dbUser);
            });
          }
        ));
        //
        // In order to help keep authentication state across HTTP requests,
        // Sequelize needs to serialize and deserialize the user
        // Just consider this part boilerplate needed to make it all work
        passport.serializeUser(function(user, cb) {
          cb(null, user);
        });
        //
        passport.deserializeUser(function(obj, cb) {
          cb(null, obj);
        });
        //
        // Exporting our configured passport
        module.exports = passport;