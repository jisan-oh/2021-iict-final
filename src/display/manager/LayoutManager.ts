import Game from "../../game/Game";
import QuestionCard from "../components/QuestionCard";
import { ClickableManager } from "../base/Clickable";

const leftDeckX = -220;
const rightDeckX = 220;
const leftDeckXSpace = 1;
const rightDeckXSpace = 3;
const cardZSpace = 3;

class LayoutManager {
  static questionCards: QuestionCard[] = [];

  static init() {
    this.questionCards = Game.questions.map((question) => {
      const card = new QuestionCard();
      card.setQuestion(question.emoji, question.text);
      card.prepareBack();
      card.flip("LEFT", false);
      return card;
    });

    LayoutManager.update();
  }

  static update() {
    this.updateLeftDeck(this.questionCards.slice(0, Game.cursor));
    this.updateCurrentCard(this.questionCards[Game.cursor]);
    this.updateRightDeck(this.questionCards.slice(Game.cursor + 1));
  }

  static updateLeftDeck(cards: QuestionCard[]) {
    for (let i = 0; i < cards.length; i++) {
      const maxDepth = cards.length - 1;
      const depth = maxDepth - i;
      cards[i].set(leftDeckX - leftDeckXSpace * depth, 0, -cardZSpace * depth);

      if (cards[i].side === "FRONT") {
        cards[i].flip("LEFT");
        ClickableManager.remove(this.questionCards[i]);
      }
    }
  }

  static updateCurrentCard(card: QuestionCard) {
    card.set(0, 0, 50);

    if (card.side === "BACK") {
      setTimeout(() => {
        card.flip("LEFT");
        ClickableManager.add(card);
        card.onClick = () => {
          Game.pickNext();
          LayoutManager.update();
        };
      }, 500);
    }
  }

  static updateRightDeck(cards: QuestionCard[]) {
    for (let i = 0; i < cards.length; i++) {
      const depth = i;
      cards[i].set(
        rightDeckX + rightDeckXSpace * depth,
        0,
        -cardZSpace * depth
      );
    }
  }

  static display() {
    for (const card of this.questionCards) {
      card.display();
    }
  }
}

export default LayoutManager;
