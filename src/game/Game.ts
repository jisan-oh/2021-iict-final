import Character from "./components/Character";
import { Question } from "../types/GameType";
import scripts from "../assets/scripts.json";

class Game {
  static pm = new Character("기획자", 5);
  static designer = new Character("디자이너", 5);
  static developer = new Character("개발자", 5);
  static questions: Question[] = [];
  static cursor = 0;

  static startIntro() {
    this.questions = [...this.questions, ...scripts.intro];
  }

  static pickNext() {
    this.cursor = Math.min(this.cursor + 1, this.questions.length - 1);
  }
}

export default Game;
