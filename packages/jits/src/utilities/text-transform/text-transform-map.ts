export type TextTransformMap = Record<
  "uppercase" | "lowercase" | "capitalize" | "normal-case",
  string
>;

export const defaultTextTransformMap: TextTransformMap = {
  uppercase: "uppercase",
  lowercase: "lowercase",
  capitalize: "capitalize",
  "normal-case": "none",
};
