declare module "p5-global" {
  global {
    interface Window {
      preload: () => void;
      setup: () => void;
      draw: () => void;
    }
  }
}
