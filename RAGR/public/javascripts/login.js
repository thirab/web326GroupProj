$(function () {
	var userN = new Array();
	var passW = new Array();

	
	//TODO this will use a better storage system :)
	$.get("username.txt", function(data) {
		var usersAndPass = data.split(',');
		for(var i =0; i<usersAndPass ; i++){
			var both= usersAndPass[i].split('.');
			userN[i] = both[0];
			passW[i] = both[1];
		};
      });
	
	$(document).find("Signup").bind('click', function (event){
		 window.open('http://localhost:3000/studentCheck');
	}
	$(document).find("Login").bind('click', function (event){
		var user=$(document).find("user");
		var pass=$(document).find("pass");
		var found = false;
		for(var i=0; i<userN.length ; i++){
			if(userN[i] === userN && passW[i] === pass){
			found=true;
			}	
		}
		//TODO check loaded array currently only valid if user == pass
		if(found){
			createCookie(active,name,.05);
			window.open('http://localhost:3000/');
		}else(){
			alert("Sorry this is invalid");
			$(document).find("pass").text("");
		}
	}
	
	function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	$(document.cookie) = name+"="+value+expires+"; path=/";
}
	
	
})

