import CardSide from "./CardSide";
import { Image } from "p5";

const textSize = 16;
const textLeading = 24;
const textY = 30;
const textPadding = 20;

class AnswerSide extends CardSide {
  background?: Image;
  text?: string;

  draw() {
    if (this.background) {
      this.texture.background(this.background);
    }

    if (this.text) {
      this.texture.fill(0);
      this.texture.textFont("Hahmlet");
      this.texture.textAlign(CENTER, TOP);
      this.texture.textWrap(WORD);
      this.texture.textLeading(textLeading);
      this.texture.textSize(textSize);
      this.texture.text(
        this.text,
        3 + textPadding,
        textY,
        this.texture.width - 2 * textPadding
      );
    }
  }
}

export default AnswerSide;
