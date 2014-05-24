define([	"vendor/jquery",	"app/App", 	"appUtils/Loader"	], 
function(	$, 					App, 		Loader				){
	console.log('NOW RUNNING :: appUtils/Loader.js');
	
	var Loader = {
		show:	function(){
			console.log('LOADER :: Showing loader');
			document.querySelector(SKOV.loaderSelector).classList.add('active');
		},
		
		hide:	function(){
			console.log('LOADER :: Hiding loader');
			document.querySelector(SKOV.loaderSelector).classList.remove('active');
		}
	}
	
	return Loader;
});