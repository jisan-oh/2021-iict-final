import { Graphics } from "p5";

abstract class CardSide {
  readonly texture: Graphics;

  constructor(width: number, height: number) {
    this.texture = createGraphics(width, height);
  }

  abstract draw(): void;
}

export default CardSide;
