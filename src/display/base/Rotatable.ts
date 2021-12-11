import Transitionable from "./Transitionable";

type Constructor = new (...args: any[]) => Transitionable;

function Rotatable<TBase extends Constructor>(Base: TBase) {
  return class Rotatable extends Base {
    private rBase = this.getNewTransitionBase();

    setRotate(z: number, transition = true) {
      this.rBase.setValue(z, transition);
    }

    protected position() {
      super.position();
      rotateZ(this.rBase.getValue());
    }

    display() {
      super.display();
      this.rBase.move();
    }
  };
}

export default Rotatable;
