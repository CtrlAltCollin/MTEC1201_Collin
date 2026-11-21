// Collin McQuade
// Short Study 7: Object Oriented Programming
// Title: Portfolio Map
// Building from: no prior short study, this is new groundwork for my final project
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
  createCanvas(windowWidth, windowHeight);
  spots.push(new PortfolioSpot(300, 300, 50, 50));
  spots.push(new PortfolioSpot(600, 150, 80, 80));
  spots.push(new PortfolioSpot(100, 450, 60, 60));
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function drawGrid() {
  stroke(150);
  let startX = -camX;
  let endX = width - camX;
  let startY = -camY;
  let endY = height - camY;
  for (let x = startX; x < endX; x += 50) {
    for (let y = startY; y < endY; y += 50) {
      //make dots near the center of the screen bigger than dots farther away,
      // creating a bulging, sphere-like illusion instead of a flat grid
      let screenX = x + camX;
      let screenY = y + camY;
      let d = dist(screenX, screenY, width / 2, height / 2);
      let maxDist = dist(0, 0, width / 2, height / 2);
      let dotSize = map(d, 0, maxDist, 8, 1);
      strokeWeight(dotSize);
      point(x, y);
    }
  }
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
  drawGrid();
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
