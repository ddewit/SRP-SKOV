define([	"vendor/backbone",	"vendor/d3", 	"app/App",	"appUtils/Loader",	"appUtils/chartDrawer",	"appViews/VisualisationView",	"appCollections/NumbersCollection"	], 
function(	Backbone, 			d3,				App, 		Loader,				chartDrawer,			VisualisationView,				NumbersCollection					){
	console.log('NOW RUNNING :: appView/VisualisationView.js');
	
	var VisualisationView = Backbone.View.extend({
		el: $(".template-container"),
		tableEl: $(".sko-data tbody"),
		template: $(SKOV.templates['visualisation']).html(),

		initialize: function () {
			// Show loader
			Loader.show();
			
			// Collection will fire the render method
	        this.collection = new NumbersCollection(SKOV.data);
	        
	        // Attach eventhandlers to collection
	        this.collection.on("reset", this.render, this);
	    },

	    render: function () {
	    	console.log('RENDERING :: VisualisationView',Date.now())
	    	// General page
	    	var tmpl = _.template($(SKOV.templates['visualisation']).html());
			$(SKOV.wrapSelector).html( tmpl() );

	        // Scopefix, yaights.
	        var that = this;

	        // Loop through models
	        var chartData 	= [];
	        var maxValue	= 0;
	        _.each(this.collection.models, function (item) {
	        	item = item.toJSON();
	        	item = item[0];

	        	var value = parseInt(item.abs);

		        chartData.push({
		        	title: item.title,
		        	value: value,
		        });

		        if(maxValue < value){
		        	maxValue = value;
		        }
		    });

		    // Draw chart
	        chartDrawer.drawChart('#chart', chartData, maxValue); 

	        // Hide loader
	        Loader.hide();
	    },
	});
	
	return VisualisationView;
});