import Character from "./components/Character";
import { Question, Target } from "../types/GameType";
import scripts from "../assets/scripts.json";

class Game {
  static pm = new Character("기획자", 5);
  static designer = new Character("디자이너", 5);
  static developer = new Character("개발자", 5);
  static questions: Question[] = [];
  static cursor = 0;
  static tryCount = 1;
  static score = 1;
  static countScore = false;

  static init() {
    this.pm.onRetireGame = () => {
      this.startBadEnding(scripts.pmBadEnding);
    };
    this.designer.onRetireGame = () => {
      this.startBadEnding(scripts.designerBadEnding);
    };
    this.developer.onRetireGame = () => {
      this.startBadEnding(scripts.developerBadEnding);
    };
  }

  static startBadEnding(badEnding: Question) {
    this.questions = [...this.questions.slice(0, Game.cursor + 1), badEnding];
    this.onCardPush();
  }

  static startIntro() {
    this.questions = [...this.questions, ...scripts.intro];
    this.onCardPush();
  }

  static startMain() {
    const main = shuffle(scripts.main);
    if (main.length > 0) {
      const lastQuestion = main[main.length - 1];
      lastQuestion.preEffects = ["startOutro"];
    }
    this.questions = [...this.questions, ...main];
    this.onCardPush();
  }

  static startOutro() {
    this.questions = [...this.questions, ...scripts.outro];
    this.onCardPush();
  }

  static startInterlude() {
    let interlude: Question[];

    switch (this.tryCount) {
      case 1:
        interlude = scripts.interlude1;
        break;
      case 2:
        interlude = scripts.interlude2;
        break;
      case 3:
        interlude = scripts.interlude3;
        break;
      case 4:
        interlude = scripts.interlude4;
        break;
      default:
        interlude = scripts.interlude5;
        break;
    }

    this.questions = [...this.questions, ...interlude];
    this.onCardPush();
  }

  static startCountScore() {
    this.countScore = true;
  }

  static stopCountScore() {
    this.countScore = false;
  }

  static reset() {
    this.pm.resetBurden();
    this.designer.resetBurden();
    this.developer.resetBurden();
    this.score = 1;
  }

  static addTryCount() {
    this.tryCount += 1;
  }

  static pickNext() {
    this.cursor = Math.min(this.cursor + 1, this.questions.length - 1);
    if (this.countScore) {
      this.score += 1;
    }
  }

  static applyBurden(targets: Target[], amount: number) {
    for (const target of targets) {
      switch (target) {
        case "pm":
          this.pm.addBurden(amount);
          break;
        case "designer":
          this.designer.addBurden(amount);
          break;
        case "developer":
          this.developer.addBurden(amount);
          break;
      }
    }
  }

  static onCardPush() {
    // noop
  }
}

export default Game;
