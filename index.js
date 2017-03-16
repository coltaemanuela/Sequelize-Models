//===============Modules=============================
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var multer= require('multer');
var fs = require('fs');
var util = require('util');
var session = require('express-session');
var authentication= require('sequelize-authentication');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var passportlocal= require('passport-local');
var passportsession= require('passport-session');

var User = require('./models/users_model.js');
var EventUser = require('./event_user_model.js');
var Event= require('./events_model.js');

var router = express.Router();

var app = express();

app.use(session({
    secret:"ceva",
    resave:true, //false
    saveUninitialized:true,
    cookie:{},
    duration: 45 * 60 * 1000,
    activeDuration: 15 * 60 * 1000
}));

//-------------------------------- View engine setup------------------------------------------------------------------------------

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//app.use('/users', users);
app.get("/session", (req, res) => {
    res.json(req.session);
});

//------------------------------------------------Routes---------------------------------------------------------------------------
app.get('/', function (req, res) {
     res.send('Welcome!');
});

//-------------------------------------Server---------------------------------------------------------------------------------

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
