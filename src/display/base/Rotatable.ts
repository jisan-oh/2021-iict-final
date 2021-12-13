import Transitionable from "./Transitionable";

type Constructor = new (...args: any[]) => Transitionable;

function Rotatable<TBase extends Constructor>(Base: TBase) {
  return class Rotatable extends Base {
    private rYBase = this.getNewTransitionBase();

    setYRotate(y: number, transition = true) {
      this.rYBase.setValue(y, transition);
    }

    protected position() {
      super.position();
      rotateY(this.rYBase.getValue());
    }

    display() {
      super.display();
      this.rYBase.move();
    }
  };
}

export default Rotatable;
