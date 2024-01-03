const passport = require('passport');
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
require('dotenv').config()

passport.use(new GoogleStrategy({
    clientID:     process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://blog-10a.netlify.app",
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
    done(null,profile);
  }
));