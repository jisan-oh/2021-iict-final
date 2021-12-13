import CardSide from "./CardSide";
import ImageManager from "../manager/ImageManager";

const textLeading = 27;
const textSize = 16;
const textY = 90;
const textPadding = 20;
const resultY = 200;

class ResultSide extends CardSide {
  private text?: string;
  private result?: string;

  set(text: string, result?: string) {
    this.text = text;
    this.result = result;
  }

  draw() {
    this.texture.background(ImageManager.cardResult);
    this.texture.fill(255);
    this.texture.textFont("Hahmlet");
    this.texture.textAlign(CENTER, TOP);
    this.texture.textLeading(textLeading);
    this.texture.textSize(textSize);

    if (this.text) {
      this.texture.text(
        this.text,
        2 + textPadding,
        textY,
        this.texture.width - 2 * textPadding
      );
    }

    if (this.result) {
      this.texture.textStyle(BOLD);
      this.texture.text(
        this.result,
        2 + textPadding,
        resultY,
        this.texture.width - 2 * textPadding
      );
    }
  }
}

export default ResultSide;
