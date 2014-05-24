// Start timer
console.time("Application start-up time");

// Namespace
var SKOV 			= SKOV || {};
var pos, time, title, network, kdh, abs, madl; /* Fields must be defined in global scope for Require JS templating to work. See http://stackoverflow.com/questions/16963639/uncaught-referenceerror-pos-is-not-defined */

// RequireJS config
requirejs.config({
	baseUrl: '/cmda/srp/clientside/static/js',
	paths: {
        vendor:			'vendor',				// Vendor scripts (libraries)
        app:			'app',					// Base of application
        appUtils:		'app/utils',			// Utilities and helpers
        appWorkers:		'app/workers',			// Web Workers
        appViews:		'app/views',			// Backbone Views
        appModels:		'app/models',			// Backbone Models
        appCollections: 'app/collections',		// Backbone Collections
    },
    shim: {
    	'vendor/jquery': {
	    	exports: '$'
    	},
        'vendor/backbone': {
            deps: ['vendor/underscore', 'vendor/jquery'],
            exports: 'Backbone'
        },
        'vendor/underscore': {
            exports: '_'
        },
    }
});

// Initiate through require
require(["app/App", "app/Router"],function(app, router){	
	// Log
	console.log('NOW RUNNING :: main.js');
	
	// Stop timer after everything is intitialized
	console.timeEnd("Application start-up time");
});