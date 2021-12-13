import Hidable from "../base/Hidable";
import Movable from "../base/Movable";
import AnswerSide from "./AnswerSide";
import pushPop from "../decorators/pushPop";
import { Answer } from "../../types/GameType";
import ImageManager from "../manager/ImageManager";
import Clickable from "../base/Clickable";
import Rotatable from "../base/Rotatable";
import Flippable from "../base/Flippable";

const cardWidth = 200;
const cardHeight = 100;

class AnswerCard extends Clickable(Rotatable(Flippable(Hidable(Movable)))) {
  private readonly answerSide = new AnswerSide(cardWidth, cardHeight);

  constructor(answer: Answer, direction: "LEFT" | "RIGHT") {
    super(cardWidth, cardHeight);

    switch (direction) {
      case "LEFT":
        this.answerSide.background = ImageManager.answerLeft;
        break;
      case "RIGHT":
        this.answerSide.background = ImageManager.answerRight;
        break;
    }
    this.answerSide.text = answer.text;
    this.answerSide.draw();
  }

  @pushPop
  display() {
    super.display();
    noStroke();

    texture(this.answerSide.texture);
    rect(0, 0, this.width, this.height);
  }
}

export default AnswerCard;
