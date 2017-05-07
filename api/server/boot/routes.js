module.exports = function(app) {
  var User = app.models.user;


	app.post('/login', function(req, res) {
	  User.login({
	    email: req.body.email,
	    password: req.body.password
	  }, 'user', function(err, token) {
	    if (err) {
	      res.json({'success':false,'error':err});
	      return;
	    }

	    res.json({'success':true,'accessToken':token.id});
	  });
	});


	//log a user out
	app.get('/logout', function(req, res, next) {
	  if (!req.accessToken){
		return res.sendStatus(401); //return 401:unauthorized if accessToken is not present
	  }
	  User.logout(req.accessToken.id, function(err) {
	    if (err){
			res.json({'success':false,'error':err});
	    }
	    res.json({'success':true});
	  });
	});


}