import { Graphics } from "p5";
import Flippable from "../base/Flippable";
import pushPop from "../decorators/pushPop";
import Hidable from "../base/Hidable";
import Movable from "../base/Movable";
import Rotatable from "../base/Rotatable";
import Clickable from "../base/Clickable";

class SituationCard extends Clickable(Rotatable(Flippable(Hidable(Movable)))) {
  protected height;
  private readonly texture: Graphics;
  private bgColor = color(255);

  constructor(width = 200, height = 300) {
    super();
    this.width = width;
    this.height = height;
    this.texture = createGraphics(width, height);
  }

  protected position() {
    super.position();
  }

  drawTexture() {
    this.texture.background(this.bgColor);
    this.texture.textFont("Hahmlet");
    this.texture.textSize(20);
    this.texture.textAlign(CENTER, TOP);
    this.texture.text("안녕?", 0, 0, this.width, this.height);
  }

  @pushPop
  display() {
    super.display();
    this.drawTexture();

    texture(this.texture);
    rect(0, 0, this.width, this.height);
  }

  onHover() {
    super.onHover();
    this.bgColor = color(255, 0, 0);
  }

  onHoverOut() {
    super.onHoverOut();
    this.bgColor = color(255);
  }

  onClick() {
    super.onClick();
    this.bgColor = color(255, 255, 0);
  }
}

export default SituationCard;
