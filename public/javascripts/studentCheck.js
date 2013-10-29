$(function () {
	$(document).find("submit").bind('click', function (event){
		var student = $(document).find("student");
		
		if(student === "yes"){
			window.open('http://localhost:3000/new'); 

		//TODO set user as student.
		}else{
		//TODO maybe differentiate sign up page in the future
			window.open('http://localhost:3000/new'); 

		}
		}
	
	
});

