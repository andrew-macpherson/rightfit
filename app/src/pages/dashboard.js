rightFit.Pages.Dashboard = (function(){
	'use strict';

	var dashboard;
	var dateCalendar;

	//var activities;

	function init() {
		//rightFit.User.checkLogin();

		app.onPageBeforeInit( 'dashboard', function( page ) {
			console.log('dashboard onPageBeforeInit');
		   

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

		currentDate = moment(currentDate).add(-1, 'days').format('YYYY-MM-DD');
		dateCalendar.setValue([currentDate]);
	}

	function setDateTomorrow(e){
		e.preventDefault();

		currentDate = moment(currentDate).add(1, 'days').format('YYYY-MM-DD');
	    dateCalendar.setValue([currentDate]);
	}

	function addToDiary(){
		var category = $$(this).data('category');

		rightFit.Router.goPage('diary-add.html',{category:category});
	}


	function getData(){
		return new Promise( function( resolve, reject ) {

			console.log('{"where":{"userId":0,"day":"'+currentDate+'"},"include":["exercise"]}');
			var startDate = moment(moment(currentDate).format('YYYY-MM-DD 00:00:00')).unix();
			var endDate = moment(moment(currentDate).format('YYYY-MM-DD 23:59:59')).unix();

			var query = {
				where:{
					userId: 0,
					day: {
						gte: startDate,
						lte: endDate
					}
				},
				include: ["exercise"]
			}

			console.log(JSON.stringify(query));

			$$.ajax({
				url: 'http://localhost:3000/api/userExercises',
				method: 'get',
				dataType: 'json',
				data:JSON.stringify(query),
				error: function(xhr, status){
					console.log(xhr);
					console.log(status);
					reject( new Error( 'Error getting exercise.'));
					return false;
				},
				success: function(data, status, xhr){

					console.log(data);
					
					var cardio = [];
					var abs = [];
					var arms = [];
					var back = [];
					var chest = [];
					var legs = [];
					var shoulders = [];
					
					for(var i=0; i < data.length; i++){
						console.log(data[i].exercise.category);
						
						if(data[i].exercise.category == 1){
							cardio.push({
								name: data[i].exercise.name,
								time: data[i].time
							});
						}
						if(data[i].exercise.category == 2){
							abs.push({
								name: data[i].exercise.name,
								set: data[i].set,
								reps: data[i].reps,
								weight: data[i].weight
							});
						}
						if(data[i].exercise.category == 3){
							arms.push({
								name: data[i].exercise.name,
								set: data[i].set,
								reps: data[i].reps,
								weight: data[i].weight
							});
						}
						if(data[i].exercise.category == 4){
							back.push({
								name: data[i].exercise.name,
								set: data[i].set,
								reps: data[i].reps,
								weight: data[i].weight
							});
						}
						if(data[i].exercise.category == 5){
							chest.push({
								name: data[i].exercise.name,
								set: data[i].set,
								reps: data[i].reps,
								weight: data[i].weight
							});
						}
						if(data[i].exercise.category == 6){
							legs.push({
								name: data[i].exercise.name,
								set: data[i].set,
								reps: data[i].reps,
								weight: data[i].weight
							});
						}
						if(data[i].exercise.category == 7){
							shoulders.push({
								name: data[i].exercise.name,
								set: data[i].set,
								reps: data[i].reps,
								weight: data[i].weight
							});
						}
						
					}
					
					
					var returnData = {
	                activities: {
	                    cardio: cardio,
	                    abs: abs,
	                    arms: arms,
	                    back: back,
	                    chest: chest,
	                    legs: legs,
	                    shoulders: shoulders
	                }
	            }

		        resolve(returnData);
				}
			});

			

        });
	}

	return{
		init: init,
		getData: getData
	}

})();

rightFit.Pages.Dashboard.init();