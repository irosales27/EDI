//create a program that can customize the number of squares in a grid
function setup() { //runs 1 time
  createCanvas (windowWidth,windowWidth); //canvas is 720 pixels x 720 pixels
  background (100,0,255); //background color
}

function draw() { //runs in a loop
fill (0,0,150) //fills shape with RGB color
strokeWeight (1) // stroke weight (thickness) 1 pixel

var num =  30;  // number of squares in my array
var sideLen = windowWidth/num; // side length

for (var y = 0; y < windowWidth; y = y + sideLen) { // loop creates a row in the y direction
for (var x = 0; x < windowWidth; x = x + sideLen) { // loop creates a row in the x direction
  quad (x,y,
        x + sideLen,y,
        x + sideLen, y + sideLen,
        x, y + sideLen);
      }
    }
}
