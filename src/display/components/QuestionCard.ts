import Flippable from "../base/Flippable";
import pushPop from "../decorators/pushPop";
import Hidable from "../base/Hidable";
import Movable from "../base/Movable";
import Rotatable from "../base/Rotatable";
import QuestionSide from "./QuestionSide";
import ResultSide from "./ResultSide";
import BackSide from "./BackSide";
import CardSide from "./CardSide";
import Clickable from "../base/Clickable";
import { Question } from "../../types/GameType";

const cardWidth = 200;
const cardHeight = 300;

class QuestionCard extends Clickable(Rotatable(Flippable(Hidable(Movable)))) {
  static backSide: BackSide;

  private readonly questionSide;
  private readonly resultSide = new ResultSide(cardWidth, cardHeight);
  private front?: CardSide;
  private back?: CardSide;
  question: Question;

  constructor(question: Question) {
    super(cardWidth, cardHeight);
    this.questionSide = new QuestionSide(
      cardWidth,
      cardHeight,
      question.emoji,
      question.text
    );
    this.questionSide.draw();
    this.question = question;

    this.front = this.questionSide;
  }

  static initBackSide() {
    this.backSide = new BackSide(cardWidth, cardHeight);
    this.backSide.draw();
  }

  setResult(text: string, burdenResult?: string) {
    this.back = this.resultSide;
    this.resultSide.set(text, burdenResult);
    this.resultSide.draw();
  }

  prepareBack() {
    if (this.side === "FRONT") {
      this.back = QuestionCard.backSide;
    } else {
      this.front = QuestionCard.backSide;
    }
  }

  isShowingBack() {
    return (
      (this.side === "FRONT" && this.front === QuestionCard.backSide) ||
      (this.side === "BACK" && this.back === QuestionCard.backSide)
    );
  }

  @pushPop
  display() {
    super.display();
    noStroke();

    if (this.front) {
      texture(this.front.texture);
    }

    translate(0, 0, -0.1);
    rect(0, 0, this.width, this.height);

    if (this.back) {
      texture(this.back.texture);
    }

    rotateY(PI);
    translate(0, 0, 0.1);
    rect(0, 0, this.width, this.height);
  }
}

export default QuestionCard;
