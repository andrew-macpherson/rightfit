rightFit.Pages.Register = (function() {	

	function init() {
		console.log('registration init');
		app.onPageInit( 'register', function( page ) {
		    $$('#registrationFormSubmit').on( 'click', registerHandler );
		}).trigger();

		app.onPageBeforeRemove( 'register', function( page ) {
		    $$('#registrationFormSubmit').off( 'click', registerHandler );
		});
	}

	function registerHandler(){
		console.log('registerHandler');
		var formData = app.formToData('#regitrationForm');
		alert(JSON.stringify(formData));
	}

	return {
        init: init
    };

})();

rightFit.Pages.Register.init();