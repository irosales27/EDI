//create a program that can customize the number of squares in a grid
let img; // img for static image


function preload () {
  gif = loadImage (assets/StickFigureGraphic.png); // to preload my image/GIF
}

function setup() { //runs 1 time
createCanvas (windowWidth,windowWidth); //canvas is 720 pixels x 720 pixels
  background (50,100,255); //background color
}
function draw() { //runs in a loop
fill (0,150,0) //fills shape with RGB color
strokeWeight (1) // stroke weight (thickness) 1 pixel

var num =  30;  // number of squares in my array
var sideLen = windowWidth/num; // side length

for (var y = 0; y < windowHeight; y = y + sideLen) { // loop creates a row in the y direction
for (var x = 0; x < windowWidth; x = x + sideLen) { // loop creates a row in the x direction
        image (img, x, y, windowWidth/num, windowWidth/num);
      }
    }
}
