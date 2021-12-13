import Movable from "../base/Movable";
import Hidable from "../base/Hidable";
import Flippable from "../base/Flippable";
import Character from "../../game/components/Character";
import CharacterSide from "./CharacterSide";
import { Image } from "p5";
import CharacterEndSide from "./CharacterEndSide";
import pushPop from "../decorators/pushPop";

const cardWidth = 150;
const cardHeight = 50;

class CharacterCard extends Flippable(Hidable(Movable)) {
  static characterEndSide: CharacterEndSide;

  private readonly characterSide;

  constructor(character: Character, background: Image) {
    super(cardWidth, cardHeight);
    this.characterSide = new CharacterSide(
      cardWidth,
      cardHeight,
      background,
      character
    );
  }

  static initEndSide() {
    this.characterEndSide = new CharacterEndSide(cardWidth, cardHeight);
    this.characterEndSide.draw();
  }

  @pushPop
  display() {
    super.display();
    noStroke();

    this.characterSide.draw();
    texture(this.characterSide.texture);

    translate(0, 0, -0.1);
    rect(0, 0, this.width, this.height);

    texture(CharacterCard.characterEndSide.texture);

    rotateX(PI);
    translate(0, 0, 0.1);
    rect(0, 0, this.width, this.height);
  }
}

export default CharacterCard;
