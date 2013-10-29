$(function () {
	$(document).find("submit").bind('click', function (event){
		var email = $(document).find("email");
		var school = email.split("@")[1].split(".")[0];
		if(school === "mtholyoke" || school === "hampshire" || school === "umass" || school === "amherst" || school === "smith"){
		
		}
		if(real){
		
		//TODO set user as student.
		}else{
		alert("This was not a valid 5 college email. You are not a student!");
		
		}
		window.open('http://localhost:3000/'); 
		}
	
	
});

