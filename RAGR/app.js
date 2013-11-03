
/**
 * Module dependencies.
 */
var express = require('express');
var mainscreen = require('./routes/mainscreen');
var user = require('./routes/user');
var index = require('./routes');

var http = require('http');
var path = require('path');

var app = module.exports = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
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
app.get('/users', user.list);
app.get('/new/student', index.newStudent);
app.get('/new/user', index.newUser);
app.get('/new', index.newProfile);
app.get('/profile', index.profile);
app.get('/login/set/:username/:pass/:student', index.setUser);
app.get('/login', index.login);
app.get('/logout', function(res,req){
	res.clearCookie('user');
	res.clearCookie('student');
	res.redirect('back');
	});



http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
