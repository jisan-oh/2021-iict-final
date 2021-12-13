class Sprite {
  protected width: number;
  protected height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  getWidth() {
    return this.width;
  }

  getHeight() {
    return this.height;
  }

  protected position() {
    // noop
  }

  display() {
    this.position();
  }
}

export default Sprite;
