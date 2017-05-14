rightFit.Pages.Dashboard = (function(){
	'use strict';

	var dashboard;
	var dateCalendar;
	var currentDate;

	function init() {
		rightFit.User.checkLogin();

		app.onPageBeforeInit( 'dashboard', function( page ) {
			console.log('dashboard init');
		   
		    ///CALENDAR 
		    currentDate = moment().format('YYYY-MM-DD');

		    $$('.dateYesterday').on( 'click', setDateYesterday );
		    $$('.dateTomorrow').on( 'click', setDateTomorrow );
				
			dateCalendar = app.calendar({
			    input: '#currentDay'
			});
		});

		app.onPageBeforeRemove( 'dashboard', function( page ) {
			console.log('dashboard off');
		    $$('.dateYesterday').off( 'click', setDateYesterday );
		    $$('.dateTomorrow').off( 'click', setDateTomorrow );
		});

	}

	function setDateYesterday(e){
		e.preventDefault();

		console.log('set yesterdays date');
		currentDate = moment(currentDate, "DD-MM-YYYY").add(1, 'days');
		dateCalendar.setValue([currentDate]);
	}

	function setDateTomorrow(e){
		e.preventDefault();

		console.log('set tomorrows date');
		currentDate = moment(currentDate, "DD-MM-YYYY").add(1, 'days');
	    dateCalendar.setValue([currentDate]);
	}

	return{
		init: init
	}

})();

rightFit.Pages.Dashboard.init();