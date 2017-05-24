rightFit.Pages.DiaryAddOptions = (function(){
	'use strict';

	var category;
	var exercise;

	function init() {

		app.onPageBeforeInit( 'diary-add-options', function( page ) {
			console.log('Diary Add Options onPageBeforeInit');

			console.log(currentDate);

			category = page.context.category;
			exercise = page.context.exercise;

			$$('#diaryAddOptionsSubmit').on('click',addExersiseToDiary);

		});

		app.onPageBeforeRemove( 'diary-add-options', function( page ) {
			$$('#diaryAddOptionsSubmit').on('click',addExersiseToDiary);
		});

	}

	function addExersiseToDiary(){
		console.log('addExersiseToDiary '+ exercise);

		return new Promise( function( resolve, reject ) {

			var formData = app.formToData('#addDiaryOptionForm');
			formData.exercise = exercise;
			formData.day = currentDate;

            $$.ajax({
				url: 'http://localhost:3000/api/userExercises',
				method: 'post',
				dataType: 'json',
				data: formData,
				error: function(xhr, status){
					console.log(xhr);
					console.log(status);
					reject( new Error( 'Error adding exercise.'));
					return false;
				},
				success: function(data, status, xhr){
					rightFit.Router.goPage('dashboard.html');
					resolve();
				}
			});
        });

	}


	function getData(category,exercise){
		return new Promise( function( resolve, reject ) {

			var data = {
				category: category,
				exercise: exercise
            }

            if(category == 'cardio'){
            	data.includeTime = true;
            	data.includeSet = true;
            	data.includeReps = false;
            	data.includeWeight = false;
            }else{
            	data.includeTime = false;
            	data.includeSet = true;
            	data.includeReps = true;
            	data.includeWeight = true;
            }

	        resolve(data);

        });
	}

	return{
		init: init,
		getData: getData
	}

})();

rightFit.Pages.DiaryAddOptions.init();