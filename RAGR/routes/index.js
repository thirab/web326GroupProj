exports.new = function(req, res){
	if(readCookie(active)!=null){
	res.redirect('http://localhost:3000/');
	}
};

exports.profile = function(req, res){
	if(readCookie(active)===null){
	res.redirect('http://localhost:3000/login');
	}
};

exports.login = function(req,res){
	if(readCookie(active)!=null){
	res.redirect('http://localhost:3000/');
	}
};

exports.list = function(req, res){
	if(readCookie(active)!=null){
    res.render('RAGR', {title: "Welcome To RAGR", })
    }else{
    	res.redirect('http://localhost:3000/login');
    }
};

function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function eraseCookie(name) {
	createCookie(name,"",-1);
}