rightFit.Pages.Index = (function(){

	function init() {
		///CHECK LOGIN
		rightFit.User.checkLogin();

		app.onPageBeforeInit( 'index', function( page ) {
			console.log('index init');
		    $$('#loginFormSubmit').on( 'click', loginHandler );
		});

		app.onPageBeforeRemove( 'index', function( page ) {
		    $$('#loginFormSubmit').off( 'click', loginHandler );
		});
	}

	function loginHandler(){
		var formData = app.formToData('#loginForm');
		console.log(formData);
		login(formData.email,formData.password);
	}

	function login(email,password){

		rightFit.User.login(email,password)
		.then(function(result){
			//mainView.router.loadPage('pages/dashboard.html');
			rightFit.Router.goPage('dashboard.html');
			/*
			mainView.router.load({
				content: 'pages/dashboard.html',
				animatePages: true
			});
			*/
		})
		.catch( function( err ) {
            alert(err);
        });

	}

	return{
		init: init,
		login: login
	}

})();

rightFit.Pages.Index.init();