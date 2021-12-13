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

const cardWidth = 200;
const cardHeight = 300;

class QuestionCard extends Clickable(Rotatable(Flippable(Hidable(Movable)))) {
  protected width = cardWidth;
  protected height = cardHeight;
  private readonly questionSide = new QuestionSide(cardWidth, cardHeight);
  private readonly resultSide = new ResultSide(cardWidth, cardHeight);
  private readonly backSide = new BackSide(cardWidth, cardHeight);
  private front: CardSide;
  private back: CardSide;

  setQuestion(emoji: string, question: string) {
    this.front = this.questionSide;
    this.questionSide.set(emoji, question);
  }

  setResult(result: string) {
    this.back = this.resultSide;
    this.resultSide.set(result);
  }

  prepareBack() {
    if (this.side === "FRONT") {
      this.back = this.backSide;
    } else {
      this.front = this.backSide;
    }
  }

  @pushPop
  display() {
    super.display();
    noStroke();

    if (this.front) {
      this.front.draw();
      texture(this.front.texture);
    }

    translate(0, 0, -0.1);
    rect(0, 0, this.width, this.height);

    if (this.back) {
      this.back.draw();
      texture(this.back.texture);
    }

    rotateY(PI);
    translate(0, 0, 0.1);
    rect(0, 0, this.width, this.height);
  }
}

export default QuestionCard;
