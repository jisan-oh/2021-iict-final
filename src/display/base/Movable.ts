import Transitionable from "./Transitionable";

class Movable extends Transitionable {
  private xBase = this.getNewTransitionBase();
  private yBase = this.getNewTransitionBase();
  private zBase = this.getNewTransitionBase();

  protected get x() {
    return this.xBase.getValue();
  }

  protected get y() {
    return this.yBase.getValue();
  }

  protected get z() {
    return this.zBase.getValue();
  }

  set(x: number, y: number, z: number, transition = true) {
    this.setX(x, transition);
    this.setY(y, transition);
    this.setZ(z, transition);
  }

  setX(x: number, transition = true) {
    this.xBase.setValue(x, transition);
  }

  setY(y: number, transition = true) {
    this.yBase.setValue(y, transition);
  }

  setZ(z: number, transition = true) {
    this.zBase.setValue(z, transition);
  }

  move(x: number, y: number, z: number, transition = true) {
    this.moveX(x, transition);
    this.moveY(y, transition);
    this.moveZ(z, transition);
  }

  moveX(xAmount: number, transition = true) {
    this.xBase.setAmount(xAmount, transition);
  }

  moveY(yAmount: number, transition = true) {
    this.yBase.setAmount(yAmount, transition);
  }

  moveZ(zAmount: number, transition = true) {
    this.zBase.setAmount(zAmount, transition);
  }

  protected position() {
    super.position();
    translate(
      this.xBase.getValue(),
      this.yBase.getValue(),
      this.zBase.getValue()
    );
  }

  display() {
    super.display();
    this.xBase.move();
    this.yBase.move();
    this.zBase.move();
  }
}

export default Movable;
