exports.newStudent = function(req, res){
	if(req.cookies.user!=null){
	res.redirect('http://localhost:3000/');
	}
};

exports.newProfile = function(req, res){
	if(req.cookies.user!=null){
	res.redirect('http://localhost:3000/');
	}
	//TODO ask if student or not
};
exports.newUser = function(req, res){
	if(req.cookies.user!=null){
	res.redirect('http://localhost:3000/');
	}
	res.render('newUser', { 
                        title:'RAGR',
                        titleinfobar: 'Create a New User',
                        });
};

exports.profile = function(req, res){
	if(req.cookies.user===null){
	res.redirect('http://localhost:3000/login');
	}else if(req.cookies.student === "true"){
	//TODO show student profile
	res.render('profile', { 
                        title:'RAGR',
                        titleinfobar: 'Profile',
                       });

	}else{
	//TODO show non-student profile
	res.render('profile', { 
                        title:'RAGR',
                        titleinfobar: 'Profile',
                       });
	};
exports.login = function(req,res){
	if(req.cookies.user!=null){
	res.redirect('http://localhost:3000/');
	}
	res.render('login', { 
                		 title:'RAGR',
                        titleinfobar: 'Login',
                       });
	};

exports.list = function(req, res){
	if(req.cookies.user!=null){
    	res.render('list', { 
                        title:'RAGR',
                        titleinfobar: 'Profile',
                       });
    }else{
    	//TODO show page of not logged in user
    	res.redirect('http://localhost:3000/login');
    }
};

exports.setUser = function(req, res){
	//TODO  could make verify
	if(req.params.username != null && req.params.password != null && req.params.student != null){
	res.cookie('user', req.params.username);
	res.cookie('student', req.params.student);
	window.open('http://localhost:3000/');
	}else{
		res.redirect('back');
	}};