// https://easings.net/ko

export function easeInExpo(x: number): number {
  return x === 0 ? 0 : pow(2, 10 * x - 10);
}

export function easeOutExpo(x: number): number {
  return x === 1 ? 1 : 1 - pow(2, -10 * x);
}
