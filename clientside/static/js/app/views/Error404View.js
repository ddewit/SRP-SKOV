define([	"vendor/backbone", 	"app/App", 	"appUtils/Loader", 	"appViews/Error404View"	],
function(	Backbone, 			App, 		Loader,				Error404View			){
	console.log('NOW RUNNING :: appView/Error404View.js');
	
	var Error404View = Backbone.View.extend({
		initialize: function(){
			// Show loader
			Loader.show();
		},

		render: function() {
			var tmpl = _.template(document.querySelector(SKOV.templates['error404']).outerHTML);
			document.querySelector(SKOV.wrapSelector).html( tmpl() );

			// Show loader
			Loader.hide();
		}
	});
	
	return Error404View;
});