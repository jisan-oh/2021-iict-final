import { Image } from "p5";
import cardBack from "/src/assets/images/card_back.png";
import cardQuestion from "/src/assets/images/card_question.png";
import cardResult from "/src/assets/images/card_result.png";

class ImageManager {
  static cardBack: Image;
  static cardQuestion: Image;
  static cardResult: Image;

  static init() {
    this.cardBack = loadImage(cardBack);
    this.cardQuestion = loadImage(cardQuestion);
    this.cardResult = loadImage(cardResult);
  }
}

export default ImageManager;
