import Movable from "../base/Movable";
import Hidable from "../base/Hidable";
import Flippable from "../base/Flippable";
import pushPop from "../decorators/pushPop";
import ScoreSide from "./ScoreSide";

const cardWidth = 180;
const cardHeight = 60;

class ScoreCard extends Flippable(Hidable(Movable)) {
  private readonly scoreSide = new ScoreSide(cardWidth, cardHeight);

  constructor() {
    super(cardWidth, cardHeight);
  }

  @pushPop
  display() {
    super.display();
    noStroke();

    this.scoreSide.draw();
    texture(this.scoreSide.texture);

    rect(0, 0, this.width, this.height);
  }
}

export default ScoreCard;
