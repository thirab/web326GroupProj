
/*
 * GET home page.
 */

exports.mainscreen = function(req, res, next){
  res.render('index.jade', { 
                        title:'RAGR',
                        titleinfobar: 'RAGR',
                        accountinfobar: 'Not signed in',
                        bodycontent: 'Body of the doc'});
};
