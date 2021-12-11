import Sprite from "./Sprite";
import { easeOutExpo } from "../utils/easeFunctions";
import TransitionBase from "./TransitionBase";

class Transitionable extends Sprite {
  protected speed = 0.015;
  protected ease = easeOutExpo;

  getNewTransitionBase() {
    return new TransitionBase(this.speed, this.ease);
  }
}

export default Transitionable;
