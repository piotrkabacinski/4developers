// http://karma-runner.github.io/0.13/config/configuration-file.html

module.exports = function(config) {

	config.set({

	    frameworks: ['jasmine'],

	    files: [
	      "assets/exports.js",
	      "es5/pTime.js",
	      "es5/cycles.js",
	      "examples/loop.js",
	      "examples/loop_2.js",
	      "karma_test.js"
	    ],

	    browsers: [ 'Chrome' , 'Firefox' ],
	    singleRun: true
	    // browserNoActivityTimeout: 10000,
	    // captureTimeout: 60000

	 });

};