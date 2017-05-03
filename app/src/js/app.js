rightFit = {};
rightFit.Pages = {};

var app = new Framework7();

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = app.addView('.view-main', {
    dynamicNavbar: true
});
