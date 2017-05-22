rightFit.Pages.DiaryAdd = (function(){
	'use strict';

	function init() {

		var category;

		app.onPageBeforeInit( 'diary-add', function( page ) {
			console.log('Diary Add onPageBeforeInit');

			$$('.addDiaryOptions').on('click',addToDiaryOptions);

		});

		app.onPageBeforeRemove( 'diary-add', function( page ) {
			$$('.addDiaryOptions').off('click',addToDiaryOptions);
		});

	}

	function addToDiaryOptions(){
		var category = $$(this).data('category');
		console.log(category);

		rightFit.Router.goPage('diary-add-options.html',{category:category});
	}


	function getData(category){

		return new Promise( function( resolve, reject ) {

			var data = {
				category: category,
				activities: {
	                0: {
	                    name: 'Jog',
	                    description: 'A light run',
	                    image: 'img/standing-bicep-dumbbell-curl-photo.jpg'
	                },
	                1: {
	                    name: 'Sprint',
	                    description: 'running really really fast',
	                    image: 'img/standing-bicep-dumbbell-curl-photo.jpg'
	                },
	                2: {
	                    name: 'Stair Master',
	                    description: 'walking up stairs',
	                    image: 'img/standing-bicep-dumbbell-curl-photo.jpg'
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

rightFit.Pages.DiaryAdd.init();