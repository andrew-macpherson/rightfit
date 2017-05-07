rightFit.Pages.Dashboard = (function(){

	function init() {
		console.log('dashboard init');
		
		app.onPageInit( 'dashboard', function( page ) {
		    //$$('#loginFormSubmit').on( 'click', loginHandler );
		}).trigger();

		app.onPageBeforeRemove( 'dashboard', function( page ) {
		    //$$('#loginFormSubmit').off( 'click', loginHandler );
		});
	}

	function loginHandler(){
		var formData = app.formToData('#loginForm');
		console.log(formData);
		login(formData.email,formData.password);
	}

	return{
		init: init
	}

})();

rightFit.Pages.Dashboard.init();