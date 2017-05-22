rightFit.Router = (function(){

	var urlPath = 'pages';

	return {
		goPage: function(page,params){
			console.log(page);
            console.log(params);
				//var moduleName = _.upperFirst( _.camelCase( page ));
                var url = page;

                // If page has slash, don't assume it is in dentist
                if ( page.indexOf('/') == -1 ) {
                    url = urlPath + '/' + url;
                }

                var options = {
                    url: url,
                    ignoreCache: true,
                    reload: false
                };

                if(page == 'dashboard.html'){
                    
                    rightFit.Pages.Dashboard.getData()
                    .then( function( data ) {
                        options.context = data;
                        //options.reload = true;
                        mainView.router.load( options );
                    })
                    .catch( function( err ) {
                        console.log( 'error going to page ' + page );
                        console.log(err);
                    });

                }else if(page == 'diary-add.html'){
                    rightFit.Pages.DiaryAdd.getData(params.category)
                    .then( function( data ) {
                        options.context = data;
                        mainView.router.load( options );
                    })
                    .catch( function( err ) {
                        console.log( 'error going to page ' + page );
                        console.log(err);
                    });
                }else if(page == 'diary-add-options.html'){
                    rightFit.Pages.DiaryAddOptions.getData(params.category)
                    .then( function( data ) {
                        options.context = data;
                        mainView.router.load( options );
                    })
                    .catch( function( err ) {
                        console.log( 'error going to page ' + page );
                        console.log(err);
                    });
                }else{
                    //options.reload = true;
                    mainView.router.load( options );
                }

                
		}
	}

})()