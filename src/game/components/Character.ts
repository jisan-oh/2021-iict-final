class Character {
  name: string;
  burden = 0;
  burdenLimit: number;

  constructor(name: string, burdenLimit: number) {
    this.name = name;
    this.burdenLimit = burdenLimit;
  }

  addBurden(amount: number) {
    this.burden = Math.max(0, Math.min(this.burden + amount, this.burdenLimit));
    if (this.burden >= this.burdenLimit) {
      this.onRetireGame();
      this.onRetireLayout();
    }
  }

  resetBurden() {
    const prevBurden = this.burden;
    this.burden = 0;
    this.onResetLayout(prevBurden >= this.burdenLimit);
  }

  onRetireGame() {
    // noop
  }

  onRetireLayout() {
    // noop
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onResetLayout(restart: boolean) {
    // noop
  }
}

export default Character;
