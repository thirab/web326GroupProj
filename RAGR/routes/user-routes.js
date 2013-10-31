var users = require('../libs/users.js');

exports.newUser = function (req, res) {
  var name = req.query.name;
  var user = name ? users.newUser(name) : name;
  res.render('new-user', { title  : 'New User',
                           'user' : user });
};

exports.getUser = function (req, res) {
  var name = req.params.name;
  var user = name ? users.getUser(name) : name;
  res.render('info-user', { title: 'User Information',
                            name : name,
                            user : user });
};
