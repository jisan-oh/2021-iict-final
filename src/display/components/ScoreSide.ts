import CardSide from "./CardSide";
import ImageManager from "../manager/ImageManager";
import Game from "../../game/Game";

const textSize = 18;
const textY = 21;

class ScoreSide extends CardSide {
  draw() {
    this.texture.background(ImageManager.score);
    this.texture.fill(0);
    this.texture.textFont("Hahmlet");
    this.texture.textAlign(CENTER, TOP);

    const text = `${Game.tryCount}학기 ${Game.score}일차`;

    this.texture.textSize(textSize);
    this.texture.text(text, 3, textY, this.texture.width);
  }
}

export default ScoreSide;
