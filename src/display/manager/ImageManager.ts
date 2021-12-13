import { Image } from "p5";
import background from "/src/assets/images/background.png";
import cardBack from "/src/assets/images/card_back.png";
import cardQuestion from "/src/assets/images/card_question.png";
import cardResult from "/src/assets/images/card_result.png";
import characterEnd from "/src/assets/images/character_end.png";
import designer from "/src/assets/images/designer.png";
import developer from "/src/assets/images/developer.png";
import pm from "/src/assets/images/pm.png";
import score from "/src/assets/images/score.png";
import answerLeft from "/src/assets/images/answer_left.png";
import answerRight from "/src/assets/images/answer_right.png";

class ImageManager {
  static background: Image;
  static cardBack: Image;
  static cardQuestion: Image;
  static cardResult: Image;
  static characterEnd: Image;
  static designer: Image;
  static developer: Image;
  static pm: Image;
  static score: Image;
  static answerLeft: Image;
  static answerRight: Image;

  static init() {
    this.background = loadImage(background);
    this.cardBack = loadImage(cardBack);
    this.cardQuestion = loadImage(cardQuestion);
    this.cardResult = loadImage(cardResult);
    this.characterEnd = loadImage(characterEnd);
    this.designer = loadImage(designer);
    this.developer = loadImage(developer);
    this.pm = loadImage(pm);
    this.score = loadImage(score);
    this.answerLeft = loadImage(answerLeft);
    this.answerRight = loadImage(answerRight);
  }
}

export default ImageManager;
