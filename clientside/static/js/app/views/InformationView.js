define([	"vendor/backbone", 	"app/App", 	"appUtils/Loader", 	"appViews/InformationView"	], 
function(	Backbone, 			App, 		Loader,				InformationView				){
	console.log('NOW RUNNING :: appView/InformationView.js');
	
	var InformationView = Backbone.View.extend({
		initialize: function(){
			// Show loader
			Loader.show();
		},

		render: function() {
			var tmpl = _.template(document.querySelector(SKOV.templates['information']).html());
			document.querySelector(SKOV.wrapSelector).html( tmpl() );

			// Hide loader
			Loader.hide();
		}
	});
	
	return InformationView;
});