type EaseFunction = (x: number) => number;

class TransitionBase {
  private value = 0;
  private amount = 0;
  private progress = 0;
  private readonly speed: number;
  private readonly ease: EaseFunction;

  constructor(speed: number, ease: EaseFunction) {
    this.speed = speed;
    this.ease = ease;
  }

  setValue(value: number, transition: boolean) {
    if (this.isTransitioning()) {
      this.endTransition();
    }

    if (transition) {
      this.amount = value - this.value;
    } else {
      this.value = value;
    }
  }

  setAmount(amount: number, transition: boolean) {
    if (this.isTransitioning()) {
      this.endTransition();
    }

    if (transition) {
      this.amount = amount;
    } else {
      this.value += amount;
    }
  }

  getValue() {
    return this.value + this.amount * this.ease(this.progress);
  }

  isTransitioning() {
    return this.amount !== 0;
  }

  move() {
    if (this.amount !== 0) {
      if (this.progress < 1) {
        this.progress = min(this.progress + this.speed, 1);
      } else {
        this.endTransition();
      }
    }
  }

  endTransition() {
    this.value += this.amount;
    this.amount = 0;
    this.progress = 0;
  }
}

export default TransitionBase;
