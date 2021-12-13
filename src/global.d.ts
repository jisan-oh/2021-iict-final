/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
  interface Window {
    preload: () => void;
    setup: () => void;
    draw: () => void;
    mousePressed: () => void;
  }

  interface NodeModule {
    hot: any;
  }

  const CHAR: any;
  const WORD: any;
}

declare module "*.json" {
  const value: any;
  export default value;
}

declare module "*.png" {
  const value: string;
  export default value;
}

declare module "p5" {
  interface p5InstanceExtensions {
    textWrap(value: any);
  }
}

export {};
