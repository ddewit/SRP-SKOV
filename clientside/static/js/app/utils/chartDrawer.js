define([	"vendor/jquery",	"vendor/d3",	"app/App", 	"appUtils/Loader"	], 
function(	$, 					d3,				App, 		Loader				){
	console.log('NOW RUNNING :: appUtils/chartDrawer.js');
	
	var chartDrawer = {
		// No need to reinvent the wheel. Source: https://gist.github.com/karmi/2311406#file-index-html-L43 / http://bl.ocks.org/mbostock/3885304
		// Modified for better implementation and use.
		drawChart: function(selector, data, maxValue) {
			// if ('undefined' == typeof config )        { var config 		= {} };
			// if ('undefined' == typeof config.width )  { config.width 	= 640 };
			// if ('undefined' == typeof config.height ) { config.height 	= 172 };

			var draw = function() {
				console.log("CHARTDRAWER :: Going to be an artist...");

				var margin 	= {top: 10, right: 0, bottom: 230, left: 60},
					width 	= 600 - margin.left - margin.right,
					height 	= 400 - margin.top - margin.bottom;

				var x = d3.scale
						  .ordinal()
						  .rangeRoundBands([0, width], .1);

				var y = d3.scale
						  .linear()
						  .range([height, 0]);

				var xAxis = d3.svg.axis()
							  .scale(x)
							  .orient("bottom");

				var yAxis = d3.svg.axis()
							  .scale(y)
							  .orient("left")
							  .ticks(10);

				var svg = d3.select(selector)
							.append("svg")
							.attr("width", width + margin.left + margin.right)
							.attr("height", height + margin.top + margin.bottom)
							.append("g")
							.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

				x.domain(data.map(function(d) { return d.title; }));
				y.domain([0, maxValue]);

				svg.append("g")
				   .attr("class", "x axis")
				   .attr("transform", "translate(0," + height + ")")
				   .call(xAxis)
				   .selectAll("text")
				   .attr("transform", "rotate(-50)")
				   .attr("dy", "0px") // -6
				   .attr("x", "-8px") // -10
				   .style("text-anchor", "end");

				svg.append("g")
				   .attr("class", "y axis")
				   .call(yAxis)
				   .append("text")
				   .attr("y", "-10px")
				   .attr("dy", ".71em")
				   .style("text-anchor", "end")
				   .text("Waarde");

				svg.selectAll(".bar")
				   .data(data)
				   .enter()
				   .append("rect")
				   .attr("class", "bar")
				   .attr("y", "160")
				   .attr("height",0)
				   .transition()
				   .delay(function(d,i){return 250+(i*100)})
				   .duration(450)
				   .attr("x", function(d) { return x(d.title); })
				   .attr("width", x.rangeBand())
				   .attr("y", function(d) { return y(d.value); })
				   .attr("height", function(d) { return height - y(d.value); });
			};

			return draw();
		}
	}
	
	return chartDrawer;
});