// Initialize your app
var app = new Framework7();

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = app.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});


$$('form.regitration-form').on('form:success', function (e) {
    var xhr = e.detail.xhr; // actual XHR object
    console.log(xrh);

    var data = e.detail.data; // Ajax response from action file
    // do something with response data
    console.log(data);
    alert('registration success');
    return false;
});
