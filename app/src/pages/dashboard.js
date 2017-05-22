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

		    $$('.addDiary').on('click',addToDiary);
				
			dateCalendar = app.calendar({
			    input: '#currentDay'
			});

		});

		app.onPageBeforeRemove( 'dashboard', function( page ) {
			console.log('dashboard off');
		    $$('.dateYesterday').off( 'click', setDateYesterday );
		    $$('.dateTomorrow').off( 'click', setDateTomorrow );

		    $$('.addDiary').off('click',addToDiary);
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

	function addToDiary(){
		var category = $$(this).data('category');
		console.log(category);

		rightFit.Router.goPage('diary-add.html',{category:category});

	}


	function getData(){
		return new Promise( function( resolve, reject ) {

			var data = {
                activities: {
                    cardio: {
                        0: {
                            name: 'Jog',
                            time: '10 min'
                        },
                        1: {
                            name: 'Sprint',
                            time: '10 min'
                        }
                    },
                    abs: {
                        
                    },
                    arms: {
                        
                    },
                    back: {
                        
                    },
                    chest: {
                        
                    },
                    legs: {
                        
                    },
                    shoulders: {
                        
                    }
                }
            }

	        resolve(data);

        });
	}

	return{
		init: init,
		getData: getData
	}

})();

rightFit.Pages.Dashboard.init();