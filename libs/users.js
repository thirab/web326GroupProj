// Maintain some state about users:
var users = [];

// An object for representing users:
function User(name) {
  this.name = name;
}
function Student(t){
this.type=t;
}
function email(e){
this.email = e;
}
function gender(g){
this.gender = g;
}
function facebook(f){
this.facebook = f;
}
function location(l){
this.location =l;
}
function firstName(fN){
this.firstName = fN;
}
function lastName(lN){
this.lastN = lN;
}
function pic(p){
this.pic = p;
}
function school(s){
this.school = s;
}
function Majors(m){
this.majors = m;
}
function Minors(m){
this.minors = m;
}
function company(check){
this.company = check;
}
function address(a){
this.address = a;
}
User.prototype.getGender = function(){
return this.gender;
};
User.prototype.getAddress = function(){
return this.address;
};
User.prototype.isCompany = function(){
return this.company;
};
User.prototype.getMinors = function(){
return this.getMinors;
};
User.prototype.getMajors = function(){
return this.majors;
};
User.prototype.getSchool = function(){
return this.school;
};
User.prototype.getPic = function(){
return this.pic;
};
User.prototype.getLast = function(){
return this.lastN;
};
User.prototype.getFirstName = function(){
return this.firstName;
};
User.prototype.getLocation = function(){
return this.location;
};
User.protoptye.getFacebook = function(){
return this.facebook;
};
User.prototype.getEmail = function(){
return this.email;
};
User.prototype.getType = function(){
return this.type;
};

// A simple getName method:
User.prototype.getName = function () {
  return this.name;
};

// Creates a new user:
exports.newUser = function (name) {
  var u = new User(name);
  u.type="false";
  users.push(u);
  return u;
};

// Gets a user:
exports.getUser = function (name) {
  var len = users.length;
  for (var i = 0; i < length; i++) {
    var u = users[i];
    if (u.getName() === name) {
      return u;
    }
  }
  return undefined;
};