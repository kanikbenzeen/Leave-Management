var express = require('express');
var app = express();
var path = require('path');
var indexController = require('./controllers/index.controller');
require('./controllers/auth');
var apiController = require('./controllers/api');
var mongoose = require('mongoose');
const bodyParser = require("body-parser"); 
app.use(bodyParser.json());
const passport = require('passport');
// require('passport-google-oauth2');
const session = require('express-session');

app.use(session({secret: "cats"}));
app.use(passport.initialize());
app.use(passport.session());

function isLoggedIn(req, res, next){
    req.user ? next() : res.sendStatus(401);
}

app.get('/', function (req, res) {
    indexController.login(req, res);
});

app.get('/user', isLoggedIn, function (req, res) {
    indexController.home(req, res);
});


app.post('/api', function( req, res){
    apiController.api(req, res);
});

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get( '/auth/google/callback',
    passport.authenticate( 'google', {
        successRedirect: '/user',
        failureRedirect: '/auth/google/failure'
}));

app.get('/auth/microsoft',
passport.authenticate('microsoft', {
  // Optionally define any authentication parameters here
  // For example, the ones in https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow

  prompt: 'select_account',
}));

app.get('/auth/microsoft/callback', 
passport.authenticate('microsoft', { failureRedirect: '/auth/google/failure' }),
function(req, res) {
  // Successful authentication, redirect home.
  res.redirect('/user');
});

app.get('/auth/google/failure', (req, res) => {
    res.send("something went wrong")
})

app.get('/logout', (req, res) => {
    req.logout();
    req.session.destroy();
    res.send("Please Login");
})

app.set('view engine', '.hbs');
app.use(express.static(path.join(__dirname, '/public')));

app.listen(8000, () =>{
    console.log("http://localhost:" + 8000);
})
