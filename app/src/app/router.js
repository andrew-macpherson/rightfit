rightFit.Router = (function(){

	var urlPath = 'pages';

	return {
		goPage: function(page){
			console.log(page);
				//var moduleName = _.upperFirst( _.camelCase( page ));
                var url = page + '.html';

                // If page has slash, don't assume it is in dentist
                if ( page.indexOf('/') == -1 ) {
                    url = urlPath + '/' + url;
                }

                var options = {
                    url: url,
                    ignoreCache: true,
                    reload: false
                };

                if(page == 'dashboard'){
                    
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


                    //options.context = activities;
                    //mainView.router.load( options );

                }else{
                    //options.reload = true;
                    mainView.router.load( options );
                }

                

                
		}
	}

})()