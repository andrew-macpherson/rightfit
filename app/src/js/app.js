rightFit = {};
rightFit.Pages = {};

var app = new Framework7();

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = app.addView('.view-main', {
    dynamicNavbar: true
});


$$('#logOut').on( 'click', logOutHandler );
function logOutHandler(){
	rightFit.User.logOut()
	.then(function(result){
		mainView.router.loadPage('index.html');
	})
	.catch( function( err ) {
        alert(err);
    });
}
