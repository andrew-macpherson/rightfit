rightFit.Pages.Dashboard = (function(){

	function init() {
		console.log('dashboard init');
		
		rightFit.User.checkLogin();

		app.onPageInit( 'dashboard', function( page ) {
		    //$$('#loginFormSubmit').on( 'click', loginHandler );

		    ///CALENDAR 
		    var calendarDefault = app.calendar({
			    input: '#currentDay',
			});          


		}).trigger();

		app.onPageBeforeRemove( 'dashboard', function( page ) {
		    //$$('#loginFormSubmit').off( 'click', loginHandler );
		});
	}


	function loginHandler(){
		var formData = app.formToData('#loginForm');
		console.log(formData);
		rightFit.Pages.Index.login(formData.email,formData.password);
	}

	return{
		init: init
	}

})();

rightFit.Pages.Dashboard.init();