import CardSide from "./CardSide";
import { Image } from "p5";

class CharacterSide extends CardSide {
  background?: Image;

  draw() {
    if (this.background) {
      this.texture.background(this.background);
    }
  }
}

export default CharacterSide;
