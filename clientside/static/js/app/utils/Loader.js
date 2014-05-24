define([	"vendor/jquery",	"app/App", 	"appUtils/Loader"	], 
function(	$, 					App, 		Loader				){
	console.log('NOW RUNNING :: appUtils/Loader.js');
	
	var Loader = {
		show:	function(){
			$(SKOV.loaderSelector).fadeIn(0);
		},
		
		hide:	function(){
			$(SKOV.loaderSelector).fadeOut();
		}
	}
	
	return Loader;
});