export type Effect =
  | "showCharacters"
  | "showScore"
  | "reset"
  | "countScore"
  | "stopCountScore";

export type Target = "pm" | "developer" | "designer";

export type Answer = {
  text: string;
  result: string;
  targets?: Target[];
  burdenAmount?: number;
};

export type Question = {
  emoji: string;
  text: string;
  answers?: Answer[];
  preEffects?: Effect[];
  postEffects?: Effect[];
};
