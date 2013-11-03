
/**
 * Module dependencies.
 */
var express = require('express');
//var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/test');

var mainscreen = require('./routes/mainscreen');
var user = require('./routes/user');
var login = require('./routes/login');
var profile = require('./routes/profile');

var http = require('http');
var path = require('path');


var app = module.exports = express();

//TODO mongoose not working? Fails to connect. Files Installed
// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/test');
// 
// // CONNECTION EVENTS 
// // When successfully connected
// mongoose.connection.on('connected', function () {
//   console.log('Mongoose default connection open to ' + dbURI);
// });
// 
// // If the connection throws an error
// mongoose.connection.on('error',function (err) {
//   console.log('Mongoose default connection error: ' + err);
// });
// 
// // When the connection is disconnected
// mongoose.connection.on('disconnected', function () {
//   console.log('Mongoose default connection disconnected');
// });

// If the Node process ends, close the Mongoose connection
// process.on('SIGINT', function() {
//   mongoose.connection.close(function () {
//     console.log('Mongoose default connection disconnected through app termination');
//     process.exit(0);
//   });
// });

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));


//TODO Vouter currently login is ejs but I guess it will need to be Jade? I couldnt figure out a way to use both. 
//app.set('view engine', 'jade');
app.set('view engine', 'ejs');

app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('the cookie monster'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', mainscreen.mainscreen);
app.get('/new/student', profile.newStudent);
app.get('/new/user', profile.newUser);
app.get('/new', profile.newProfile);
app.get('/profile', profile.profile);
app.get('/profile/edit', profile.edit);
app.get('/login/set/:username/:pass/:student', login.setUser);
app.get('/login', login.login);
app.get('/logout', function(req,res){
	res.clearCookie('user');
	res.clearCookie('student');
	res.redirect('/');
	});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
