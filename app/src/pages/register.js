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
				alert();
			},
			success: function(data, status){
				console.log('success');
				console.log(data);
				console.log(status);
			}
		});


	}

	return {
        init: init
    };

})();

rightFit.Pages.Register.init();