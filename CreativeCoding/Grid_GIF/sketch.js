//create a program that can customize the number of squares in a grid
let img; // img for static image


function preload () {
  img = loadImage (assets/StickFigureGraphic.png); // to preload my image/GIF
}

function setup() { //runs 1 time
createCanvas (windowWidth,windowHeight); //canvas is 720 pixels x 720 pixels
}

function draw() { //runs in a loop

var num =  30;  // number of squares in my array
var sideLen = windowWidth/num; // side length

for (var y = 0; y < windowHeight; y = y + sideLen) { // loop creates a row in the y direction
for (var x = 0; x < windowWidth; x = x + sideLen) { // loop creates a row in the x direction
        image (img, x, y, windowWidth/num, windowWidth/num);
      }
    }
}

function windowResized () {
  resizeCanvas (windowWidth, windowHeight);
}
