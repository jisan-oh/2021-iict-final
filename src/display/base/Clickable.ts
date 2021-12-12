import Movable from "./Movable";

type Constructor = new (...args: any[]) => Movable;

function Clickable<TBase extends Constructor>(Base: TBase) {
  return class Clickable extends Base {
    constructor(...args: any[]) {
      super(args);
    }

    display() {
      super.display();
    }

    private isInside(x: number, y: number) {
      x -= width / 2;
      y -= height / 2;
      const halfWidth = this.width / 2;
      const halfHeight = this.height / 2;
      return (
        x >= this.x - halfWidth &&
        x <= this.x + halfWidth &&
        y >= this.y - halfHeight &&
        y <= this.y + halfHeight
      );
    }

    isHovered() {
      return this.isInside(mouseX, mouseY);
    }

    isHoveredBefore() {
      return this.isInside(pmouseX, pmouseY);
    }

    onHover() {
      // noop
    }

    onHoverOut() {
      // noop
    }

    onClick() {
      // noop
    }
  };
}

type ManagedClickable = {
  isHovered(): boolean;
  isHoveredBefore(): boolean;
  onHover(): void;
  onHoverOut(): void;
  onClick(): void;
};

export class ClickableManager {
  private static clickables: ManagedClickable[] = [];

  static add(clickable: ManagedClickable) {
    this.clickables.push(clickable);
  }

  static remove(clickable: ManagedClickable) {
    this.clickables = this.clickables.filter((v) => v !== clickable);
  }

  static listenHover() {
    for (const clickable of this.clickables) {
      if (clickable.isHovered() && !clickable.isHoveredBefore()) {
        clickable.onHover();
      } else if (!clickable.isHovered() && clickable.isHoveredBefore()) {
        clickable.onHoverOut();
      }
    }
  }

  static listenClick() {
    for (const clickable of this.clickables) {
      if (clickable.isHovered()) {
        clickable.onClick();
      }
    }
  }
}

export default Clickable;
