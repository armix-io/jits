export type TextAlignMap = Record<
  "left" | "right" | "center" | "justify",
  string
>;

export const defaultTextAlignMap: TextAlignMap = {
  left: "left",
  right: "right",
  center: "center",
  justify: "justify",
};
