import CardSide from "./CardSide";
import { Image } from "p5";
import Character from "../../game/components/Character";

const emojiSize = 20;
const emojiY = 18;
const burdenEmoji = "😤";

class CharacterSide extends CardSide {
  private readonly background: Image;
  private readonly character: Character;

  constructor(
    width: number,
    height: number,
    background: Image,
    character: Character
  ) {
    super(width, height);
    this.background = background;
    this.character = character;
  }

  draw() {
    this.texture.background(this.background);
    this.texture.fill(0);
    this.texture.textFont("Hahmlet");
    this.texture.textAlign(CENTER, TOP);
    this.texture.textWrap(WORD);

    let emojiString = "";
    for (let i = 0; i < this.character.burden; i++) {
      emojiString += burdenEmoji;
    }

    this.texture.textSize(emojiSize);
    this.texture.text(emojiString, 3, emojiY, this.texture.width);
  }
}

export default CharacterSide;
