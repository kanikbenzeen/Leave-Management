const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
const MicrosoftStrategy = require('passport-microsoft').Strategy;
const passport = require('passport');

var GOOGLE_CLIENT_ID = "709905597853-trepgusfl9q22cokteo9d36upobqhnaj.apps.googleusercontent.com";
var GOOGLE_CLIENT_SECRET = "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";
var user = {}

passport.use(new GoogleStrategy({
    clientID:     GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:8000/auth/google/callback",
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
      user={
        name: profile._json.name,
        picture: profile._json.picture,
        email: profile._json.email
      }
      return done(null, profile);

    // });
  }
));

console.log(user);

passport.serializeUser(function(user, done){
    done(null, user)
})

passport.deserializeUser(function(user, done){
    done(null, user)
})

passport.use(new MicrosoftStrategy({
  // Standard OAuth2 options
  clientID: '33c4aae0-2d10-4873-a7b1-45397800e8a2',
  clientSecret: '410fc95b-92a3-47e9-bc5d-042c387f14cc',
  callbackURL: "http://localhost:8000/auth/microsoft/callback",
  scope: ['user.read'],

  // Microsoft specific options

  // [Optional] The tenant for the application. Defaults to 'common'. 
  // Used to construct the authorizationURL and tokenURL
  tenant: 'common',

  // [Optional] The authorization URL. Defaults to `https://login.microsoftonline.com/${tenant}/oauth2/v2.0/authorize`
  authorizationURL: 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize',

  // [Optional] The token URL. Defaults to `https://login.microsoftonline.com/${tenant}/oauth2/v2.0/token`
  tokenURL: 'https://login.microsoftonline.com/common/oauth2/v2.0/token',
},
function(accessToken, refreshToken, profile, done) {
  // User.findOrCreate({ userId: profile.id }, function (err, user) {
    return done(err, user);
  // });
}
));

exports.module = {

}