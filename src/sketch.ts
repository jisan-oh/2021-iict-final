import SituationCard from "./display/components/SituationCard";

let card: SituationCard;

function setup() {
  createCanvas(800, 600, WEBGL);
  card = new SituationCard(200, 300);
  card.hide("TOP", false);
  card.setRotate(random(-1, 1) * (HALF_PI / 20), false);
  setInterval(() => {
    card.show();
    card.flip("LEFT");
  }, 1000);
}

function draw() {
  background(220);
  card.display();
}

window.setup = setup;
window.draw = draw;
