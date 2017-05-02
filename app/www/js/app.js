// Initialize your app
var app = new Framework7();

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = app.addView('.view-main', {
    dynamicNavbar: true
});



app.onPageInit( 'register', function( page ) {
    $$('#registrationFormSubmit').on( 'click', registerHandler );
}).trigger();

app.onPageBeforeRemove( 'register', function( page ) {
    $$('#registrationFormSubmit').off( 'click', registerHandler );
});


function registerHandler(){
	var formData = app.formToData('#regitrationForm');
	alert(JSON.stringify(formData));
}