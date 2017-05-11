rightFit.Pages.Index = (function(){

	function init() {
		console.log('index init');

		///CHECK LOGIN
		rightFit.User.checkLogin();

		app.onPageInit( 'register', function( page ) {
		    $$('#loginFormSubmit').on( 'click', loginHandler );
		}).trigger();

		app.onPageBeforeRemove( 'register', function( page ) {
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
			mainView.router.loadPage('pages/dashboard.html');
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