function setup() { //runs 1 time
  createCanvas (720,720); //canvas is 720 pixels x 720 pixels
  background (0,100,255); //background is RGB blue
}

function draw() { //runs in a loop
fill (255,0,0) //fills red
strokeWeight (1) // stroke weight (thickness) 1 pixel

for (var y = 0; y < 720; y = y + 360) { // loop creates a row in the y direction
for (var x = 0; x < 720; x = x + 360) { // loop creates a row in the x direction
  quad (x,y,
        x + 360,y,
        x + 360,y + 360,
        x, y + 360);
      }
    }
}
