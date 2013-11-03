$(function () {
	$(document).find("submit").bind('click', function (event){
		var user = $(document).find("user");
		var pass = $(document).find("pass");
		var email = $(document).find("email");
		var company = = $(document).find("company");
		var fName = = $(document).find("fName");
		var lName = = $(document).find("lName");
		var gender = = $(document).find("gender");
		
		//TODO save data in file as user
		
		window.open('http://localhost:3000/login/set/' + user + "/" + pass + "/" + student); 
	}
})

