export type TextDecorationLineMap = Record<
  "underline" | "line-through" | "no-underline",
  string
>;

export const defaultTextDecorationLineMap: TextDecorationLineMap = {
  underline: "underline",
  "line-through": "line-through",
  "no-underline": "none",
};
