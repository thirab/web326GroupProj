$(function () {
	$(document).find("submit").bind('click', function (event){
		var user = $(document).find("user");
		var pass = $(document).find("pass");
		var email = $(document).find("email");
		var student = = $(document).find("student");
		var school = = $(document).find("school");
		var fName = = $(document).find("fName");
		var lName = = $(document).find("lName");
		var gender = = $(document).find("gender");
		
		//TODO save data in file as user
		
		createCookie(active,user,.05)	
		window.open('http://localhost:3000/'); 
	}
	
	function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
	}
	
	function eraseCookie(name) {
	createCookie(name,"",-1);
	}
})

