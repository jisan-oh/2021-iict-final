import CardSide from "./CardSide";
import ImageManager from "../manager/ImageManager";

const resultLeading = 27;
const resultSize = 16;
const resultY = 90;
const resultPadding = 20;

class ResultSide extends CardSide {
  private result: string;

  set(result: string) {
    this.result = result;
  }

  draw() {
    this.texture.background(ImageManager.cardResult);
    this.texture.fill(255);
    this.texture.textFont("Hahmlet");
    this.texture.textAlign(CENTER, TOP);

    if (this.result) {
      this.texture.textLeading(resultLeading);
      this.texture.textSize(resultSize);
      this.texture.text(
        this.result,
        2 + resultPadding,
        resultY,
        this.texture.width - 2 * resultPadding
      );
    }
  }
}

export default ResultSide;
