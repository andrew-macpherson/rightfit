rightFit.Pages.DiaryAddOptions = (function(){
	'use strict';

	function init() {

		app.onPageBeforeInit( 'diary-add-options', function( page ) {
			console.log('Diary Add Options onPageBeforeInit');

		});

		app.onPageBeforeRemove( 'diary-add-options', function( page ) {

		});

	}


	function getData(category){
		return new Promise( function( resolve, reject ) {

			var data = {
				category: category
            }

            if(category == 'cardio'){
            	data.includeTime = true;
            	data.includeSet = true;
            	data.includeReps = false;
            }else{
            	data.includeTime = false;
            	data.includeSet = true;
            	data.includeReps = true;
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