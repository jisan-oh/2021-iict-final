import Game from "../../game/Game";
import QuestionCard from "../components/QuestionCard";
import { ClickableManager } from "../base/Clickable";
import { Answer, Effect, Target } from "../../types/GameType";
import CharacterCard from "../components/CharacterCard";
import ImageManager from "./ImageManager";
import Character from "../../game/components/Character";
import { Image } from "p5";
import ScoreCard from "../components/ScoreCard";
import AnswerCard from "../components/AnswerCard";

const leftDeckX = -220;
const rightDeckX = 220;
const leftDeckXSpace = 1;
const rightDeckXSpace = 3;
const cardZSpace = 3;
const characterXSpace = 10;
const topMargin = 10;
const scoreRightMargin = 10;
const answerXSpace = 10;
const answerY = 230;

type CharacterData = [Character, Image];

class LayoutManager {
  static characterCards: CharacterCard[] = [];
  static questionCards: QuestionCard[] = [];
  static scoreCard: ScoreCard;
  static answerCards: AnswerCard[] = [];

  static init() {
    QuestionCard.initBackSide();
    CharacterCard.initEndSide();

    this.questionCards = Game.questions.map((question) => {
      const card = new QuestionCard(question);
      card.prepareBack();
      card.flip("LEFT", false);
      return card;
    });

    const characterData: CharacterData[] = [
      [Game.pm, ImageManager.pm],
      [Game.designer, ImageManager.designer],
      [Game.developer, ImageManager.developer],
    ];

    this.characterCards = characterData.map(([character, background]) => {
      const card = new CharacterCard(character, background);
      card.hide("TOP", false);
      return card;
    });

    this.scoreCard = new ScoreCard();
    this.scoreCard.hide("TOP", false);

    LayoutManager.update();
  }

  static update() {
    this.updateLeftDeck(this.questionCards.slice(0, Game.cursor));
    this.updateCurrentCard(this.questionCards[Game.cursor]);
    this.updateRightDeck(this.questionCards.slice(Game.cursor + 1));
    this.updateCharacters();
    this.updateScore();
  }

  static updateLeftDeck(cards: QuestionCard[]) {
    for (let i = 0; i < cards.length; i++) {
      const maxDepth = cards.length - 1;
      const depth = maxDepth - i;
      cards[i].set(leftDeckX - leftDeckXSpace * depth, 0, -cardZSpace * depth);

      if (!cards[i].isShowingBack()) {
        cards[i].prepareBack();
        cards[i].flip("LEFT");
        ClickableManager.remove(this.questionCards[i]);
        const postEffects = cards[i].question?.postEffects;
        if (postEffects) {
          this.runEffects(postEffects);
        }
      }
    }
  }

  static updateCurrentCard(card: QuestionCard) {
    card.set(0, 0, 50);

    if (card.side === "BACK") {
      setTimeout(() => {
        card.flip("LEFT");
        if (card.question?.answers) {
          this.updateAnswers(card.question.answers);
        } else {
          ClickableManager.add(card);
          card.onClick = () => {
            Game.pickNext();
            LayoutManager.update();
          };
        }

        if (card.question?.preEffects) {
          this.runEffects(card.question.preEffects);
        }
      }, 500);
    }
  }

  static updateAnswers(answers: Answer[]) {
    for (const card of this.answerCards) {
      card.hide("BOTTOM");
      ClickableManager.remove(card);
      setTimeout(() => {
        this.answerCards = this.answerCards.filter((v) => v !== card);
      }, 3000);
    }

    this.answerCards = this.answerCards.concat(
      answers.map((answer, index) => {
        const left = index === 0;
        const aCard = new AnswerCard(answer, left ? "LEFT" : "RIGHT");
        const x = aCard.getWidth() / 2 + answerXSpace / 2;
        aCard.set(left ? -x : x, answerY, 0, false);
        aCard.hide("BOTTOM", false);
        aCard.show();
        ClickableManager.add(aCard);
        aCard.onClick = () => {
          this.questionCards[Game.cursor].setYRotate(0);
          this.updateResultCard(this.questionCards[Game.cursor], answer, index);
        };
        aCard.onHover = () => {
          this.questionCards[Game.cursor].setYRotate(left ? -0.2 : 0.2);
        };
        return aCard;
      })
    );
  }

  static updateResultCard(qCard: QuestionCard, answer: Answer, index: number) {
    let burdenResult;
    if (answer.targets && answer.burdenAmount) {
      burdenResult = this.burdenResult(answer.targets, answer.burdenAmount);
    }
    qCard.setResult(answer.result, burdenResult);
    qCard.flip(index === 0 ? "LEFT" : "RIGHT");

    ClickableManager.add(qCard);
    qCard.onClick = () => {
      Game.pickNext();
      LayoutManager.update();
    };

    if (answer.targets && answer.burdenAmount) {
      Game.applyBurden(answer.targets, answer.burdenAmount);
    }
    this.updateAnswers([]);
  }

  static runEffects(effects: Effect[]) {
    for (const effect of effects) {
      switch (effect) {
        case "showCharacters":
          for (const card of this.characterCards) {
            card.show();
          }
          break;
        case "showScore":
          this.scoreCard.show();
          break;
      }
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

  static updateCharacters() {
    for (let i = 0; i < this.characterCards.length; i++) {
      const card = this.characterCards[i];
      const top = -height / 2 + card.getHeight() / 2;
      const left = -width / 2 + card.getWidth() / 2;
      this.characterCards[i].set(
        left + i * (card.getWidth() + characterXSpace) + characterXSpace,
        top + topMargin,
        0,
        false
      );
    }
  }

  static updateScore() {
    const top = -height / 2 + this.scoreCard.getHeight() / 2;
    const right = width / 2 - this.scoreCard.getWidth() / 2;
    this.scoreCard.set(right - scoreRightMargin, top + topMargin, 0, false);
  }

  static display() {
    for (const card of this.questionCards) {
      card.display();
    }
    for (const card of this.characterCards) {
      card.display();
    }
    this.scoreCard.display();
    for (const card of this.answerCards) {
      card.display();
    }
  }

  static burdenResult(targets: Target[], burdenAmount: number) {
    return `${targets
      .map((target) => {
        switch (target) {
          case "pm":
            return "기획자";
          case "designer":
            return "디자이너";
          case "developer":
            return "개발자";
        }
      })
      .join(", ")} 힘듦 ${
      burdenAmount > 0 ? `+${burdenAmount}` : burdenAmount
    }`;
  }
}

export default LayoutManager;
