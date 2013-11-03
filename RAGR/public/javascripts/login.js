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
		var student = false;
		var found = false;
		for(var i=0; i<userN.length ; i++){
			if(userN[i] === userN && passW[i] === pass){
			found=true;
				//TODO check if student
				var student = true;
			}	
		}
		//TODO check loaded array currently only valid if user == pass
		if(found){
			(active,name,.05);
			window.open('http://localhost:3000/login/set/' + user + '/'+ pass + '/' + student);
		}else(){
			alert("Sorry this is invalid");
			$(document).find("pass").text("");
		}
	}
	
	
})

