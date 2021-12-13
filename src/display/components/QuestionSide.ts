import CardSide from "./CardSide";
import ImageManager from "../manager/ImageManager";

const emojiSize = 30;
const emojiY = 40;
const questionLeading = 27;
const questionSize = 16;
const questionY = 90;
const questionPadding = 20;

class QuestionSide extends CardSide {
  private readonly emoji: string;
  private readonly question: string;

  constructor(width: number, height: number, emoji: string, question: string) {
    super(width, height);
    this.emoji = emoji;
    this.question = question;
  }

  draw() {
    this.texture.background(ImageManager.cardQuestion);
    this.texture.fill(0);
    this.texture.textFont("Hahmlet");
    this.texture.textAlign(CENTER, TOP);
    this.texture.textWrap(WORD);

    if (this.emoji) {
      this.texture.textSize(emojiSize);
      this.texture.text(this.emoji, 3, emojiY, this.texture.width);
    }

    if (this.question) {
      this.texture.textLeading(questionLeading);
      this.texture.textSize(questionSize);
      this.texture.text(
        this.question,
        2 + questionPadding,
        questionY,
        this.texture.width - 2 * questionPadding
      );
    }
  }
}

export default QuestionSide;
