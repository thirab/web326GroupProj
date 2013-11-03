exports.login = function(req,res){
	//if(req.cookies.user!==null){
	//res.redirect('http://localhost:3000/');
	//}else{
	console.log("no cookies!");
	res.render('login', { 
                		 title:'RAGR',
                       	 titleinfobar: 'Login'
                       });
                      // }
	};
exports.setUser = function(req, res){
	//TODO  could make verify
	if(req.params.username !== null && req.params.password !== null && req.params.student !== null){
		res.cookie('user', req.params.username);
		res.cookie('student', req.params.student);
		window.open('http://localhost:3000/');
	}else{
		res.redirect('back');
		}
};