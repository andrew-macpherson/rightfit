rightFit.Pages.Dashboard = (function(){

	var dateCalendar;

	function init() {		
		rightFit.User.checkLogin();

		app.onPageInit( 'dashboard', function( page ) {
		    $$('#dateYesterday').on( 'click', setDateYesterday );
		    $$('#dateTomorrow').on( 'click', setDateTomorrow );

		    ///CALENDAR 
		    var today = moment().format('YYYY-MM-DD');

		    setTimeout(function(){
				dateCalendar = app.calendar({
				    input: '#currentDay'
				});
				//dateCalendar.setValue([today]);
		    },2000);		

		}).trigger();

		app.onPageBeforeRemove( 'dashboard', function( page ) {
		    $$('#dateYesterday').off( 'click', setDateYesterday );
		    $$('#dateTomorrow').off( 'click', setDateTomorrow );
		});

	}

	function setDateYesterday(){

	}
	
	function setDateTomorrow(){
		
	}

	return{
		init: init
	}

})();

rightFit.Pages.Dashboard.init();