rightFit.Pages.Register = (function() {

	function init() {
		app.onPageBeforeInit( 'register', function( page ) {
			console.log('register init');
		    $$('#registrationFormSubmit').on( 'click', registerHandler );
		});

		app.onPageBeforeRemove( 'register', function( page ) {
		    $$('#registrationFormSubmit').off( 'click', registerHandler );
		});
	}

	function registerHandler(){
		var formData = app.formToData('#regitrationForm');
		//alert(JSON.stringify(formData));

		$$.ajax({
			url: 'http://localhost:3000/api/users',
			method: 'post',
			dataType: 'json',
			data: formData,
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
				rightFit.Pages.Index.login(formData.email,formData.password);
			}
		});

	}

	return {
        init: init
    };

})();

rightFit.Pages.Register.init();