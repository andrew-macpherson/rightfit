rightFit.Pages.Dashboard = (function(){
	'use strict';

	var dashboard;
	var dateCalendar;
	var currentDate;

	//var activities;

	function init() {
		//rightFit.User.checkLogin();

		app.onPageBeforeInit( 'dashboard', function( page ) {
			/// GET ACTIBITIES
			//getActivities();

			console.log('dashboard onPageBeforeInit');
		   
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

		currentDate = moment(currentDate, "YYYY-MM-DD").add(1, 'days');
		dateCalendar.setValue([currentDate]);
	}

	function setDateTomorrow(e){
		e.preventDefault();

		console.log('set tomorrows date');
		currentDate = moment(currentDate, "YYYY-MM-DD").add(1, 'days');
	    dateCalendar.setValue([currentDate]);
	}


	function getData(){
		return new Promise( function( resolve, reject ) {

			var activities = {
                activities: {
                    cardio: {
                        0: {
                            name: 'Sprint',
                            time: '10 min'
                        },
                        1: {
                            name: 'Sprint',
                            time: '10 min'
                        }
                    },
                    abs: {
                        
                    }
                }
            }

	        resolve(activities);

        });
	}

	return{
		init: init,
		getData: getData
	}

})();

rightFit.Pages.Dashboard.init();