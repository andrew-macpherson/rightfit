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
	    /*
	    res.render('home', { //login user and render 'home' view
	      email: req.body.email,
	      accessToken: token.id
	    });
	    */

	  });
	});

}