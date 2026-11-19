/* Collin McQuade
JackoLantern/Halloween theme
*/

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

  // left eye
  triangle(150,160, 100,260, 200,260);

  // right eye
  triangle(550,160, 500,260, 600,260);

  // nose
  triangle(350,220, 320,280, 380,280);

  // mouth
  fill("red");
  ellipse(350, 360, 420, 110);

  // sharp teeth
  fill("white");
  triangle(180,400, 205,320, 230,400);
  triangle(260,400, 285,320, 310,400);
  triangle(340,400, 365,320, 390,400);
  triangle(420,400, 445,320, 470,400);
}