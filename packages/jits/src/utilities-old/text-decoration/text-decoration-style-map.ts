export type TextDecorationStyleMap = Record<
  "solid" | "double" | "dotted" | "dashed",
  string
>;

export const defaultTextDecorationStyleMap: TextDecorationStyleMap = {
  solid: "solid",
  double: "double",
  dotted: "dotted",
  dashed: "dashed",
};
