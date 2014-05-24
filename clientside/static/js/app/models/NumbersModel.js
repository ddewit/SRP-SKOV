define([    "vendor/backbone",  "app/App",  "appViews/VisualisationView",    "appCollections/NumbersCollection",	"vendor/worker!appWorkers/fetcher"  ],
function(   Backbone,           App,        VisualisationView,               NumbersCollection,             		worker                              ){
    console.log('NOW RUNNING :: appModels/NumbersModel.js');

    var NumbersModel = Backbone.Collection.extend({
        // Set model defaults *(backbone method)*
	    defaults: {
	       	"pos" 		: 0,
	       	"time" 		: "0000",
	       	"title" 	: "Onbekend",
	       	"network" 	: "Onbekend",
	       	"kdh" 		: 0,
	       	"madl" 		: 0,
	       	"ab" 		: 0,
	    },
	    
	    // Initialize model *(backbone method)*
	    initialize: function () {
	        
	    },
    });

    return NumbersModel;
}); 