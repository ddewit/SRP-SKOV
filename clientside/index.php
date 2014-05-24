<!DOCTYPE html>
<html class="no-js">
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>SKO - Visualisatie van de gegevens van gisteren</title>
        
        <meta name="description" 	content="SKO Visualisatie van de Dag Top-25 gisteren.">
        <meta name="viewport" 		content="width=device-width, initial-scale=1">

        <link rel="stylesheet" href="static/css/style.css" />
        <!-- <link rel="stylesheet/less" href="static/css/style.less" /> -->
        <!-- <script src="static/js/vendor/less.js"></script> -->
		<!-- <script type="text/javascript">less.env="development";less.watch();less.logLevel=0;</script> -->

        <!-- Single entry point: RequireJS -->
		<script data-main="static/js/main" src="static/js/vendor/require.js"></script>

        <!--[if lt IE 9]>
            <script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
            <script>window.html5 || document.write('<script src="js/vendor/html5shiv.js"><\/script>')</script>
        <![endif]-->
    </head>
    <body>
        <header class="page-head">
            <div class="container">
            	<a class="logo" href="#" title="SKO Visualisatie">
                	<h1>SKO Visualisatie</h1>
					<h2>Vandaag een overzicht van de Dag Top-25 van gister.</h2>
            	</a>
                
                <nav class="main-nav">
	            	<ul>
	            		<li><a href="#visualisatie" title="Visualisatie van Dag Top-25 gisteren">Visualisatie</a></li>
	            		<li><a href="#informatie" 	title="Informatie over dit project">Informatie</a></li>
	            	</ul>
	            </nav>
            </div>
        </header>

        <section class="page-content">
        	<div class="page-loader active">Bezig met laden</div>
        
            <div class="container">
                <!--[if lt IE 9]>
                    <div class="notification error old-ie-browser">
                        <h4>Mededeling:</h4>
                        <p>Je gebruikt een <strong>verouderde en niet langer ondersteunde</strong> versie van Internet Explorer. Bezoek <a href="http://browsehappy.com/">www.browsehappy.com</a> om je internet-ervaring te verbeteren.</p>
                    </div>
                <![endif]-->
                
                <div class="notification-center"></div>
                
                <div class="template-container"><!-- Gogo Router! --></div>
            </div>            
        </section>

        <footer class="page-footer">
            <div class="container">
                <p class="copyright">&copy; 2014 - Danny de Wit. Kijkcijfers afkomstig van <a href="http://kijkonderzoek.nl" title="Stichting Kijkonderzoek" class="credits sko">Stichting Kijkonderzoek</a></p>
            </div>
        </footer>
        
        <!-- Templates -->
        <script id="visualisation" type="text/template">
	        <div class="visualisation">
	            <div class="graph">
	        		<h1>Kijkcijfer visualisatie</h1>

                    <div id="chart"></div>	        		
				</div>
				
				<div class="filter">
					<!-- <h3>Filter</h3>
					<form id="filter-form" name="visualisation-filter" method="get" action="<?php echo $_SERVER['PHP_SELF']; ?>">
						<ul>
							<li><label for="filter"><input type="checkbox" name="filter" id="filter">Filter</label></li>
							<li><label for="filter"><input type="checkbox" name="filter" id="filter">Filter</label></li>
							<li><label for="filter"><input type="checkbox" name="filter" id="filter">Filter</label></li>
							<li><label for="filter"><input type="checkbox" name="filter" id="filter">Filter</label></li>
						</ul>
					</form> -->

                    <h3>Todos</h3>
                    <ul>
                        <li>Tooltips met exacte value</li>
                        <li>Filter en meer weergave opties (kijkersdichtheid, marktaandeel, percentage)</li>
                        <li>Stabielere serverside-api met meer opties</li>
                        <li>Local Storage uitbreiden, dagen terugkijken</li>
                        <li>Betere console logging</li>
                        <li>Smooth height transition van footer</li>
                        <li>Betere cohersie tussen collection(s) en view(s).</li>
                        <li>Epischere <a href="#404" title="404-beleving">404-beleving</a>.</li>
                    </ul>
				</div>
	        </div>
        </script>
        
        <script id="error404" type="text/template">
    		<h1>Four-oh-Four (404)</h1>
			<p>De opgevraagde pagina kon niet geraadpleegd worden.</p>
        </script>
        
        <script id="information" type="text/template">
    		<h1>Over deze visualisatie</h1>
			<p>Deze visualisatie is gemaakt door <a href="http://www.dannydewit.nl">Danny de Wit</a> tijdens zijn studie <a href="http://www.hva.nl/opleiding/voltijd/communication-and-multimedia-design/">Communication &amp; Multimedia Design</a> aan de Hogeschool van Amsterdam.</p>
            <p>De visualisatie is tot stand gekomen met de gegevens van <a href="http://kijkonderzoek.nl" title="Stichting Kijkonderzoek" class="credits sko">Stichting Kijkonderzoek</a>. Voor dit project zijn de volgende technieken, methodieken en tools gebruikt:</p>
            <ul>
                <li><a target="_blank" href="http://w3.org/TR/html5/" title="HTML5 Docs">HTML5</a></li>
                <li><a target="_blank" href="http://w3.org/TR/css3-syntax/" title="CSS3 Syntax Docs">CSS3</a></li>
                <li><a target="_blank" href="http://w3.org/TR/workers/" title="Web Workers Docs">Web Workers</a></li>
                <li><a target="_blank" href="http://w3.org/TR/webstorage/" title="(Local) Web Storage">Local Storage</a></li>
                <li><a target="_blank" href="http://lesscss.org" title="LESS">LESS</a></li>
                <li><a target="_blank" href="http://requirejs.org/" title="RequireJS">RequireJS</a></li>
                <li><a target="_blank" href="http://backbonejs.org/" title="Backbone.js">Backbone.js</a></li>
                <li><a target="_blank" href="http://underscorejs.org/" title="Underscore.js">Underscore.js</a></li>
                <li><a target="_blank" href="http://jquery.org/" title="jQuery">jQuery</a></li>
                <li><a target="_blank" href="http://d3js.org/" title="d3js">d3js</a></li>
                <li><a target="_blank" href="https://github.com/chadly/requirejs-web-workers" title="RequireJS Web Workers">Require.js Web Workers plugin</a></li>
                <li><a target="_blank" href="http://www.google.nl/intl/nl/chrome/browser/" title="Google Chrome Browser">Google Chrome Browser</a></li>
                <li><a target="_blank" href="http://gtmetrix.com/" title="GTMetrix">GTMetrix</a> (<a target="_blank" href="http://gtmetrix.com/reports/www.dannydewit.nl/laPuuX7a" title="Resultaat">resultaat</a>)</li>
            </ul>
        </script>

        </script>
        
        <script id="error" type="text/template">
        	<div class="notification error">
                <h4>Four-oh-Four (404)</h4>
				<p>De opgevraagde pagina kon niet geraadpleegd worden.</p>
            </div>
        </script>
    </body>
</html>
