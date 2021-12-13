import { ClickableManager } from "./display/base/Clickable";
import ImageManager from "./display/manager/ImageManager";
import LayoutManager from "./display/manager/LayoutManager";
import Game from "./game/Game";

function preload() {
  ImageManager.init();
}

function setup() {
  createCanvas(800, 600, WEBGL);
  Game.init();
  Game.startIntro();
  LayoutManager.init();
}

function draw() {
  push();
  translate(0, 0, -100);
  image(
    ImageManager.background,
    -width / 2 - 80,
    -height / 2 - 80,
    width + 160,
    height + 160
  );
  pop();
  ClickableManager.listenHover();
  LayoutManager.display();
}

function mousePressed() {
  ClickableManager.listenClick();
}

window.preload = preload;
window.setup = setup;
window.draw = draw;
window.mousePressed = mousePressed;
