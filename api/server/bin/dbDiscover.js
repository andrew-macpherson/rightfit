////// SCRIPT NOT COMPLETE /////
////// REFERENCE: http://loopback.io/doc/en/lb2/Discovering-models-from-relational-databases.html#example-discovery /////

var loopback = require('loopback');
var ds = loopback.createDataSource('mysql',{
	"host": "localhost",
	"port": 3306,
	"database": "rightfit",
	"username": "root",
	"password": ""
});


ds.discoverAndBuildModels('programs',{visited: {},associations: true},
function(err,models){
	models.programs.findOne
})