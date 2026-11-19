// Collin McQuade
// Short Study 7: Object Oriented Programming
// Click and drag to pan around the canvas.
// for a pannable-world camera system, which this project will expand on.
//
// Sources:
// translate() - p5js.org/reference/p5/translate
// mouseDragged() - p5js.org/reference/p5/mouseDragged
// pmouseX / pmouseY - p5js.org/reference/p5/pmouseX, p5js.org/reference/p5/pmouseY

let camX = 0;
let camY = 0;
let spots = [];

function setup() {
  createCanvas(700, 500);
  spots.push(new PortfolioSpot(300, 300, 50, 50));
  spots.push(new PortfolioSpot(600, 150, 80, 80));
  spots.push(new PortfolioSpot(100, 450, 60, 60));
}

function mouseDragged() {
  // move the camera by the distance the mouse has moved since the last frame
  camX += mouseX - pmouseX;
  camY += mouseY - pmouseY;
}

function draw() {
  background(220);
  // move the camera to the current position
  translate(camX, camY);
  for (let spot of spots) {
    if (spot.isHovered()) {
      fill(255, 0, 0);
    } else {
      fill(255);
    }
    spot.display();
  }
}
class PortfolioSpot {
  // Represents a placehodler protfolio piece at a postion in the world.
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
  // draws this spot at its tored postion and size in the wold.
  display() {
    rect(this.x, this.y, this.w, this.h);
}

// returns true if the mouse is currently over this spot, false otherwise
  isHovered() {
    let worldMouseX = mouseX - camX;
    let worldMouseY = mouseY - camY;
    return worldMouseX > this.x && worldMouseX < this.x + this.w && worldMouseY > this.y && worldMouseY < this.y + this.h;
  }
}
