exports.newStudent = function(req, res){
	// if(req.cookies.user!==null){
// 	res.redirect('http://localhost:3000/');
// 	}
	res.render('newStudent', {title: 'Create New Profile' });
};

exports.newProfile = function(req, res){
	// if(req.cookies.user!==null){
// 	res.redirect('http://localhost:3000/');
// 	}
	//TODO ask if student or not
	res.render('studentCheck', { title: 'Are You a 5-College Student?'});
};
exports.newUser = function(req, res){
	// if(req.cookies.user!==null){
// 	res.redirect('http://localhost:3000/');
// 	}
	res.render('newUser', { 
                        title:'RAGR',
                        titleinfobar: 'Create a New User'
                        });
};

exports.profile = function(req, res){
	// if(req.cookies.user===null){
// 	res.redirect('http://localhost:3000/login');
// 	}else if(req.cookies.student === "true"){
	//TODO show student profile
	res.render('profile', { 
                        title:'RAGR',
                        titleinfobar: 'Profile'
                       });
	};

exports.edit = function(req, res){
	// if(req.cookies.user===null){
// 	res.redirect('http://localhost:3000/login');
// 	}else if(req.cookies.student === "true"){
	//TODO show student profile
	res.render('editP', { 
                        title:'RAGR',
                        titleinfobar: 'Edit'
                       });
	};