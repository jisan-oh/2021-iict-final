import Movable from "./Movable";

type Constructor = new (...args: any[]) => Movable;

type Direction = "LEFT" | "RIGHT" | "TOP" | "BOTTOM";

function Hidable<TBase extends Constructor>(Base: TBase) {
  return class Hideable extends Base {
    private hXBase = this.getNewTransitionBase();
    private hYBase = this.getNewTransitionBase();
    private xMargin = 10;
    private yMargin = 10;

    protected position() {
      super.position();
      const xValue = this.hXBase.getValue();
      const yValue = this.hYBase.getValue();
      const xOffset = xValue > 0 ? -this.x : this.x;
      const yOffset = yValue > 0 ? -this.y : this.y;
      const x = xValue * (width / 2 + this.width / 2 + this.xMargin + xOffset);
      const y =
        yValue * (height / 2 + this.height / 2 + this.yMargin + yOffset);
      translate(x, y);
    }

    display() {
      super.display();
      this.hXBase.move();
      this.hYBase.move();
    }

    hide(direction: Direction, transition = true) {
      switch (direction) {
        case "LEFT":
          this.hXBase.setValue(-1, transition);
          break;
        case "RIGHT":
          this.hXBase.setAmount(1, transition);
          break;
        case "TOP":
          this.hYBase.setAmount(-1, transition);
          break;
        case "BOTTOM":
          this.hYBase.setAmount(1, transition);
          break;
      }
    }

    show(transition = true) {
      this.hXBase.setValue(0, transition);
      this.hYBase.setValue(0, transition);
    }

    isHiding() {
      return (
        Math.abs(this.hXBase.getValue()) === 1 ||
        Math.abs(this.hYBase.getValue()) === 1
      );
    }
  };
}

export default Hidable;
