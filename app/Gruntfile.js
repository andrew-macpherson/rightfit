// Gruntfile.js

// our wrapper function (required by grunt and its plugins)
// all configuration goes inside this function
module.exports = function(grunt) {

  // ===========================================================================
  // CONFIGURE GRUNT ===========================================================
  // ===========================================================================
  grunt.initConfig({

    // get the configuration info from package.json ----------------------------
    // this way we can use things like name and version (pkg.name)
    pkg: grunt.file.readJSON('package.json'),

    // OTHER VARIABLES
    target: grunt.option('target') || 'local',

    // all of our configuration will go here

    exec: {
          options: {
              maxBuffer: Infinity
          },
          build_android: 'cordova build android --release',
          build_ios: {
              options: {
                  maxBuffer: Infinity
              },
              command: 'cordova build ios'
          },
          run_ios: {
              options: {
                  maxBuffer: Infinity
              },
              command: 'cordova run ios'
          },
          run_android: 'cordova run android',
          run_browser: 'cordova run browser',
          prepare: {
              command:"cordova prepare",
              stdout:true,
              stderror:true
          }
      }

  });

  // ===========================================================================
  // LOAD GRUNT PLUGINS ========================================================
  // ===========================================================================
  // we can only load these if they are in our package.json
  // make sure you have run npm install so our app can find these

  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');


  grunt.registerTask('init', function() {
      var target = grunt.config.get( 'target' );
      grunt.log.writeln( 'Building app for ' + target + ' environment' );
  });


// Tasks
grunt.registerTask( 'browser',  [ 'init', 'exec:run_browser' ]);
grunt.registerTask( 'android',  [ 'init', 'exec:run_android' ]);


};