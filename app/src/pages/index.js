rightFit.Pages.Index = (function(){

	function init() {
		console.log('index init');
		
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
		console.log('login');
		console.log(email);
		console.log(password);

		$$.ajax({
			url: 'http://localhost:3000/api/users/login',
			method: 'post',
			dataType: 'json',
			data: {email:email,password:password},
			beforeSend: function(){
				console.log('validate data');
			},
			error: function(xhr, status){
				console.log('error');
				console.log(xhr);
				console.log(status);
			},
			success: function(data, status, xhr){
				console.log('success');
				console.log(data);
				console.log(xhr);
				console.log(status);
			}
		});

	}

	return{
		init: init,
		login: login
	}

})();

rightFit.Pages.Index.init();