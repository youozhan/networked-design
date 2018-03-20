// Pressure v2.1.1 | Created By Stuart Yamartino | MIT License | 2015 - 2017
// Reference: https://github.com/stuyam/pressure/blob/master/examples/example.js
// Reference: http://cobwwweb.com/mutlicolored-dotted-grid-canvas 

// Setup the parameters
var dotMargin = 15;
var numRows = 8;
var numCols = 4;
var palette = ['#febe12', '#f387b8', '#42ae4a', '#0477bb', '#ef59a1'];

// Setup
var canvas = $('canvas.dots');
var context = canvas[0].getContext('2d');
var canvasWidth = canvas.width();
var canvasHeight = canvas.height();
canvas.attr({height: canvasHeight, width: canvasWidth});

var dotWidth = ((canvasWidth - (2 * dotMargin)) / numCols) - dotMargin;
var dotHeight = ((canvasHeight - (2 * dotMargin)) / numRows) - dotMargin;

if( dotWidth > dotHeight ) {
  var dotDiameter = dotHeight;
  var xMargin = (canvasWidth - ((2 * dotMargin) + (numCols * dotDiameter))) / numCols;
  var yMargin = dotMargin;
} else {
  var dotDiameter = dotWidth;
  var xMargin = dotMargin;
  var yMargin = (canvasHeight - ((2 * dotMargin) + (numRows * dotDiameter))) / numRows;
}

var dotRadius = dotDiameter * 0.5;

// Loop
for(var i = 0; i < numRows; i++) { // i is the row iterator
  for(var j = 0; j < numCols; j++) { // j is the column iterator
  var x = (j * (dotDiameter + xMargin)) + dotMargin + (xMargin / 2) + dotRadius;
  var y = (i * (dotDiameter + yMargin)) + dotMargin + (yMargin / 2) + dotRadius;
  var color = palette[Math.floor(Math.random() * palette.length)];
  drawDot(x, y, dotRadius, color);
  }
}

function drawDot(x, y, radius, color) {
  context.beginPath();
  context.arc(x, y, radius, 0, 2 * Math.PI, false);
  context.fillStyle = color;
  context.fill();
}

// Define press event
var block = {
    start: function(event){
        // this is called on force start
        // this.style.backgroundColor = '#0471A6';
    },
    end: function(){        
        var clickedCell = this;

        // this is called on force end
        setTimeout(function() {
            clickedCell.style.backgroundColor = '#ffffff';
        }, 500);

        // $('#logBox').html('No button pressed');
        console.log('No button pressed');
    },
    change: function(force, event){
        // $('#logBox').html(force);
        console.log(force);
    },
    unsupported: function(){
        // $('#logBox').html('3D touch not supported on this browser');
        console.log('3D touch not supported on this browser');
    },
    startDeepPress: function(event){
        console.log('start deep press', event);
        this.style.backgroundColor = '#014566';
      },
    endDeepPress: function(){
        console.log('end deep press');
        this.style.backgroundColor = '#0471A6';
      }
};

$.pressureConfig({
    polyfill: false
});

$('canvas.dots').pressure(block);