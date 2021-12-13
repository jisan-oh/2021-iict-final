class Character {
  name: string;
  private burden = 0;
  burdenLimit: number;

  constructor(name: string, burdenLimit: number) {
    this.name = name;
    this.burdenLimit = burdenLimit;
  }

  getBurden() {
    return this.burden;
  }

  addBurden(amount: number) {
    this.burden = Math.max(0, this.burden + amount);
    if (this.burden >= this.burdenLimit) {
      this.onRetire();
    }
  }

  onRetire() {
    // noop
  }
}

export default Character;
