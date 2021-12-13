class Character {
  name: string;
  _burden = 0;
  burdenLimit: number;

  constructor(name: string, burdenLimit: number) {
    this.name = name;
    this.burdenLimit = burdenLimit;
  }

  set burden(burden: number) {
    this._burden = burden;
    if (this._burden >= this.burdenLimit) {
      this.onRetire();
    }
  }

  onRetire() {
    // noop
  }
}

export default Character;
