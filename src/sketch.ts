import { ClickableManager } from "./display/base/Clickable";
import ImageManager from "./display/manager/ImageManager";
import LayoutManager from "./display/manager/LayoutManager";
import Game from "./game/Game";

function preload() {
  ImageManager.init();
}

function setup() {
  createCanvas(800, 600, WEBGL);
  Game.startIntro();
  LayoutManager.init();
}

function draw() {
  background(220);
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

// hot reloading

if (module.hot) {
  module.hot.accept(() => {
    setup();
  });
}
