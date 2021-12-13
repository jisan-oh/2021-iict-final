import CardSide from "./CardSide";
import ImageManager from "../manager/ImageManager";

class CharacterEndSide extends CardSide {
  draw() {
    this.texture.background(ImageManager.characterEnd);
  }
}

export default CharacterEndSide;
