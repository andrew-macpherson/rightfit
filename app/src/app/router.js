rightFit.Router = (function(){

	var urlPath = 'pages';

	return {
		goPage: function(page){
			console.log(page);
				//var moduleName = _.upperFirst( _.camelCase( page ));
                var url = page + '.html';

                //params = params || {};

                // If page has slash, don't assume it is in dentist
                if ( page.indexOf('/') == -1 ) {
                    url = urlPath + '/' + url;
                }

                var options = {
                    url: url,
                    ignoreCache: true,
                    reload: false,
                    context: 'dashboard'
                };

                //options.reload = true;
                mainView.router.load( options );
		}
	}

})()