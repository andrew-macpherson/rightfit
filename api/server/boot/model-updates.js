module.exports = function(app) {

/// UPDATE ALL DATABASE TABLES TO DB 
//// @todo: find way to automate this 

	app.dataSources.rightfit.autoupdate('user', function(err) {
		if (err) throw err;
	});

	app.dataSources.rightfit.autoupdate('AccessToken', function(err) {
		if (err) throw err;
	});

	app.dataSources.rightfit.autoupdate('ACL', function(err) {
		if (err) throw err;
	});

	app.dataSources.rightfit.autoupdate('RoleMapping', function(err) {
		if (err) throw err;
	});

	app.dataSources.rightfit.autoupdate('Role', function(err) {
		if (err) throw err;
	});


	app.dataSources.rightfit.autoupdate('exercise', function(err) {
		if (err) throw err;
	});

	app.dataSources.rightfit.autoupdate('exerciseCategories', function(err) {
		if (err) throw err;
	});

	

};
