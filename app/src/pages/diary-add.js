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

			if(category == 'cardio'){
				var categoryId = 1;
			}else if(category == 'abs'){
				var categoryId = 2;
			}else if(category == 'arms'){
				var categoryId = 3;
			}else if(category == 'back'){
				var categoryId = 4;
			}else if(category == 'chest'){
				var categoryId = 5;
			}else if(category == 'legs'){
				var categoryId = 6;
			}else if(category == 'shoulders'){
				var categoryId = 6;
			}

            $$.ajax({
				url: 'http://localhost:3000/api/exerciseCategories/'+categoryId+'/exercises',
				method: 'get',
				dataType: 'json',
				error: function(xhr, status){
					reject( new Error( 'Could not log in.'));
					return false;
				},
				success: function(data, status, xhr){
					var returnData = {
						category: category,
						activities: data
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

rightFit.Pages.DiaryAdd.init();