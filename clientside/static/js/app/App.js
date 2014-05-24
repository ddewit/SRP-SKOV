define(["app/App"	], 
function(App		){
	console.log('NOW RUNNING :: app/app.js');
 		
	// Dataset (will contain data, after it is fetched from serverside component)
	SKOV.data 			= [],
	
	// Main wrapper
	SKOV.wrapSelector 	= '.page-content .template-container';
	
	// Notifications	
	SKOV.notificationCenter = '.page-content .container .notification-center';
	
	// Loader
	SKOV.loaderSelector	= '.page-loader';
	
	// Templates
	SKOV.templates		= {
		'error404'		: '#error404',
		'information'	: '#information',
		'visualisation'	: '#visualisation',	
	};
});