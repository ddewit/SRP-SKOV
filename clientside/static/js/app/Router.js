define(	["vendor/backbone",	"vendor/jquery",	"appUtils/Loader",	"appViews/VisualisationView", 	"appViews/InformationView",	"appViews/Error404View",	"app/Router"], 
function(Backbone, 			$,					Loader,				VisualisationView, 				InformationView, 			Error404View, 				Router		){
	console.log('NOW RUNNING :: app/Router.js');

	SKOV.Router = Backbone.Router.extend({
		// Define routes
		routes: {
			''				: 'showIndex',
			'visualisatie'	: 'showIndex',
			'informatie'	: 'showInformation',
	
			// If none of the above, show 404
			'*path'			: 'showError404'
		},
	
		// Index
		showIndex: function(actions){
			// Log event
			console.log('ROUTER :: showIndex');
			
			// Highlight proper navigational item
			$('nav.main-nav a').removeClass('current').filter('[href="#visualisatie"]').addClass('current');
			
			// Load and render view
			var view = new VisualisationView();
			SKOV.view = view;
			// view.render(); // Should be done by the collection, unfortunately.
		},
	
		// Info
		showInformation: function(actions){
			// Log event
			console.log('ROUTER :: showInformation');
			
			// Highlight proper navigational item
			$('nav.main-nav a').removeClass('current').filter('[href="#informatie"]').addClass('current');
			
			// Load and render view
			var view = new InformationView();
			view.render();
		},
		
		// 404 - not found
		showError404: function(actions){
			// Log event
			console.log('ROUTER :: showError404');

			// Highlight proper navigational item
			$('nav.main-nav a').removeClass('current').filter('[href="#404"]').addClass('current');
			
			// Load and render view
			var view = new Error404View();
			view.render();
		}
	});
	
	// Start routing and browser history log
	SKOV.appRouter = new SKOV.Router();
	Backbone.history.start();
});