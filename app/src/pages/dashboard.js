rightFit.Pages.Dashboard = (function(){

	var calendarDefault;

	function init() {
		console.log('dashboard init');
		
		rightFit.User.checkLogin();

		app.onPageInit( 'dashboard', function( page ) {
		    //$$('#currentDay').on( 'click', calendarOpen );

		    ///CALENDAR 
		    setTimeout(function(){
				calendarDefault = app.calendar({
				    input: '#currentDay'
				});
		    },1000);		

		}).trigger();

		app.onPageBeforeRemove( 'dashboard', function( page ) {
		    //$$('#currentDay').off( 'click', calendarOpen );
		});

	}

	return{
		init: init
	}

})();

rightFit.Pages.Dashboard.init();