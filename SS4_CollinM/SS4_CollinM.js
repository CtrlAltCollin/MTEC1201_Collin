/* Collin McQuade
Title: Pumpkin Mood Swings
Theme: Jack-o-lantern / Halloween series — this sketch lets the pumpkin
switch between different expressions based on key input.
Instructions: press 1 for a normal face, 2 for an angry face,
3 for a surprised face.
*/

let mood = 1; // 1 = normal, 2 = angry, 3 = surprised

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

  // mouth changes depending on the current mood
  drawExpression(mood);
}

function keyPressed() {
  if (key === '1') {
    mood = 1;
  } else if (key === '2') {
    mood = 2;
  } else if (key === '3') {
    mood = 3;
  }
}

function drawExpression(currentMood) {
  if (currentMood === 1) {
    // normal mouth: red with sharp white teeth
    fill("red");
    ellipse(350, 360, 420, 110);
    fill("white");
    triangle(180,400, 205,320, 230,400);
    triangle(260,400, 285,320, 310,400);
    triangle(340,400, 365,320, 390,400);
    triangle(420,400, 445,320, 470,400);
  } else if (currentMood === 2) {
    // angry mouth: clenched black snarl with two fangs
    fill("black");
    rect(250, 350, 200, 30);
    fill("white");
    triangle(260,380, 280,420, 300,380);
    triangle(400,380, 420,420, 440,380);
  } else {
    // surprised mouth: round open "O"
    fill("black");
    ellipse(350, 370, 90, 110);
  }
}
