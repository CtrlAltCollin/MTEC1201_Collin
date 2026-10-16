/* Collin McQuade
Title: Pumpkin Mood Swings
Theme: Jack-o-lantern / Halloween series — Instructions: press SPACE to begin. Press 1 for a normal face, 2 for
an angry face, 3 for a surprised face. Press E to end, press R to
restart from the beginning.
*/

let mood = 1; // 1 = normal, 2 = angry, 3 = surprised
let gamestate = "start"; // start, play, end

function setup() {
  createCanvas(700, 500);
}

function draw() {
  if (gamestate === "start") {
    showStartScreen();
  } else if (gamestate === "play") {
    showPumpkin();
  } else if (gamestate === "end") {
    showEndScreen();
  }
}
function showStartScreen() {
  background("black");
  fill("orange");
  textAlign(CENTER, CENTER);
  textSize(32);
  text("Pumpkin Mood Swings", 350, 220);
  textSize(16);
  text("Press SPACE to start", 350, 270);
}

function showEndScreen() {
  background("black");
  fill("orange");
  textAlign(CENTER, CENTER);
  textSize(32);
  text("Game Over", 350, 220);
  textSize(16);
  text("Press R to restart", 350, 270);
}

function showPumpkin() { background("orange");
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

  // pupils follow cursor
  drawPupils(150, 220);
  drawPupils(550, 220);

 // nose
  triangle(350,220, 320,280, 380,280);

  // mouth changes depending on the current mood
  drawExpression(mood);}

  // right eye
triangle(550,160, 500,260, 600,260);

// blink to cover eye for a second
//if (frameCount % 180 < 6) {
 // fill("orange");
 // rect(90, 230, 120, 20);
  //rect(490, 230, 120, 20);
  //fill("black");
//}

// nose
triangle(350,220, 320,280, 380,280);

function drawPupils(eyex, eyey) {
  //pointing pupils towards the cursor
  let angle = atan2(mouseY - eyey, mouseX - eyex);
  let pupilX = eyex + cos(angle) * 8;
  let pupilY = eyey + sin(angle) * 8;
  fill("white");
  ellipse(pupilX, pupilY, 14, 14);
  fill("black");
  ellipse(pupilX, pupilY, 6, 6);
}

function keyPressed() {
  if (gamestate === "start" && key === " ") {
    gamestate = "play";
  } else if (gamestate === "play") {
    if (key === "1") {
      mood = 1;
    } else if (key === '2') {
      mood = 2;
    } else if (key === '3') {
      mood = 3;
    } else if (key === 'e' || key === 'E') {
      gamestate = "end";
    }
  }else if (gamestate === "end" && (key === 'r' || key === 'R')) {
    resetSketch();
  }
}
function resetSketch() {
  mood = 1;
  gamestate = "start";
}

function drawExpression(currentMood) {
  if (currentMood === 1) {
    // normal mouth: red with sharp white teeth
    fill("red");
    let mouthPulse = 110 + sin(frameCount * 0.1) * 10;
    ellipse(350, 360, 420, mouthPulse);
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
