// write your javascript code here.
// feel free to change the pre-set attributes as you see fit

let margin = {
    top: 60,
    left: 50,
    right: 30,
    bottom: 35
  },
  width = 500 - margin.left - margin.right,
  height = 500 - margin.top - margin.bottom;

//SVG that will hold the visualization 
let svg = d3.select('#vis')
  .append('svg')
  .attr('preserveAspectRatio', 'xMidYMid meet') // this will scale your visualization according to the size of its parent element and the page.
  .attr('width', '100%') // this is now required by Chrome to ensure the SVG shows up at all
  .style('background-color', 'white') 
  .style('border', 'solid')
  .attr('viewBox', [0, 0, width + margin.left + margin.right, height + margin.top + margin.bottom].join(' '))



// Add a square 
var circleColor = "#b2df8a"
let rect = svg.append('rect')
  .attr('x', '100')
  .attr('y', '200')
  .attr('width', '20%')
  .attr('height', '20%')
  .attr('fill', '#a6cee3')
  .on('mouseover', function() {
      
      d3.select(this).attr('stroke', 'black').attr('stroke-width', 3);
    })
    .on('mouseout', function() {
      // Setting the stroke color to null removes it entirely.
      d3.select(this).attr('stroke', null);
    })
    .on("click", function(){
      // alternates between 2 colors
      var nextColor = circleColor == "#b2df8a" ? "pink" : "#b2df8a";
      circleColor = circleColor == "#b2df8a" ? "pink" : "#b2df8a";
      d3.select('circle').style("fill", nextColor);
     })
;


// Add a circle 
let circle = svg.append('circle') 
  .attr('cx', '350')
  .attr('cy', '250')
  .attr('r', '60')
  .attr('fill', '#b2df8a')
  .on('mouseover', function() {
      // adds bold line on hover
      
      d3.select(this).attr('stroke', 'black').attr('stroke-width', 3);
    })
    .on('mouseout', function() {
      // Removes bold line when mouse is removed
      d3.select(this).attr('stroke', null);
    })
     .on("dblclick", function(){
      // alternates between 2 colors
      var nextColor = circleColor == "#b2df8a" ? "pink" : "#b2df8a";
      circleColor = circleColor == "#b2df8a" ? "pink" : "#b2df8a";
      var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
      d3.select(this).style("fill", nextColor);
      d3.select('rect').style("fill", randomColor);
     });





