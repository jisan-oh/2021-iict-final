import Transitionable from "./Transitionable";

type Constructor = new (...args: any[]) => Transitionable;

function Flippable<TBase extends Constructor>(Base: TBase) {
  return class Flippable extends Base {
    private fXBase = this.getNewTransitionBase();
    private fYBase = this.getNewTransitionBase();

    protected position() {
      super.position();
      rectMode(CENTER);
      const xValue = this.fXBase.getValue();
      const yValue = this.fYBase.getValue();
      const xBump = abs(sin(xValue * PI)) * (this.height / 2);
      const yBump = abs(sin(yValue * PI)) * (this.width / 2);
      translate(0, 0, max(xBump, yBump));
      rotateX(xValue * PI);
      rotateY(yValue * PI);
    }

    display() {
      super.display();
      this.fXBase.move();
      this.fYBase.move();
    }

    flip(direction: "LEFT" | "RIGHT" | "TOP" | "BOTTOM") {
      switch (direction) {
        case "LEFT":
          this.fYBase.setAmount(-1, true);
          break;
        case "RIGHT":
          this.fYBase.setAmount(1, true);
          break;
        case "TOP":
          this.fXBase.setAmount(1, true);
          break;
        case "BOTTOM":
          this.fXBase.setAmount(-1, true);
          break;
      }
    }
  };
}

export default Flippable;
