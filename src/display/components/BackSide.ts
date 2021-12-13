import CardSide from "./CardSide";
import ImageManager from "../manager/ImageManager";

class BackSide extends CardSide {
  draw() {
    this.texture.background(ImageManager.cardBack);
  }
}

export default BackSide;
