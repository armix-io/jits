export type AlignItemsMap = Record<
  "start" | "end" | "center" | "stretch" | "baseline",
  string
>;

export const defaultAlignItemsMap: AlignItemsMap = {
  start: "flex-start",
  end: "flex-end",
  center: "center",
  stretch: "stretch",
  baseline: "baseline",
};
