import Transitionable from "./Transitionable";

class Movable extends Transitionable {
  private xBase = this.getNewTransitionBase();
  private yBase = this.getNewTransitionBase();

  protected get x() {
    return this.xBase.getValue();
  }

  protected get y() {
    return this.yBase.getValue();
  }

  set(x: number, y: number, transition = true) {
    this.setX(x, transition);
    this.setY(y, transition);
  }

  setX(x: number, transition = true) {
    this.xBase.setValue(x, transition);
  }

  setY(y: number, transition = true) {
    this.yBase.setValue(y, transition);
  }

  move(x: number, y: number, transition = true) {
    this.moveX(x, transition);
    this.moveY(y, transition);
  }

  moveX(xAmount: number, transition = true) {
    this.xBase.setAmount(xAmount, transition);
  }

  moveY(yAmount: number, transition = true) {
    this.yBase.setAmount(yAmount, transition);
  }

  protected position() {
    super.position();
    translate(this.xBase.getValue(), this.yBase.getValue());
  }

  display() {
    super.display();
    this.xBase.move();
    this.yBase.move();
  }
}

export default Movable;
