/* Collin M.
   Title: Blink

   Concept: My theme this semester is the jack-o'-lantern / Halloween.
   In SS1 I drew the carved pumpkin face. In SS2 the pumpkin comes alive
   and reacts to you: when you click on one of its eyes, that eye blinks.

   Click on the left or right eye to make it blink.
   Click both to make it blink with both eyes.
*/

// how open each eye is (100 = fully open, 0 = closed)
let leftEye = 100;
let rightEye = 100;

function setup() {
  createCanvas(700, 500);
}

function draw() {
  background("orange");
  fill("black");
  noStroke();

  // top ridges (3 small curves chained together)
  ellipse(117, -65, 320, 200);
  ellipse(350, -65, 320, 200);
  ellipse(583, -65, 320, 200);

  // bottom ridges (3 small curves chained together)
  ellipse(117, 565, 320, 200);
  ellipse(350, 565, 320, 200);
  ellipse(583, 565, 320, 200);

  // eyes slowly open back up after a blink (increasing over time)
  if (leftEye < 100) {
    leftEye = leftEye + 5;
  }
  if (rightEye < 100) {
    rightEye = rightEye + 5;
  }

  // left eye: the top point moves down when the eye closes
  triangle(150, 260 - leftEye, 100, 260, 200, 260);

  // right eye
  triangle(550, 260 - rightEye, 500, 260, 600, 260);

  // nose
  triangle(350, 220, 320, 280, 380, 280);

  // mouth
  fill("red");
  ellipse(350, 360, 420, 110);

  // sharp teeth
  fill("white");
  triangle(180, 400, 205, 320, 230, 400);
  triangle(260, 400, 285, 320, 310, 400);
  triangle(340, 400, 365, 320, 390, 400);
  triangle(420, 400, 445, 320, 470, 400);
}

function mousePressed() {
  // clicked on the left eye? close it
  if (mouseX > 100 && mouseX < 200 && mouseY > 160 && mouseY < 260) {
    leftEye = 0;
  }

  // clicked on the right eye? close it
  if (mouseX > 500 && mouseX < 600 && mouseY > 160 && mouseY < 260) {
    rightEye = 0;
  }
}