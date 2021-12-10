function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  background(220);
  rotateY(millis() / 400);
  rectMode(CENTER);
  rect(0, 0, 200, 200);
}

window.setup = setup;
window.draw = draw;
