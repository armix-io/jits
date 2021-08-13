export type AlignContentMap = Record<
  "start" | "end" | "center" | "stretch" | "between" | "around",
  string
>;

export const defaultAlignContentMap: AlignContentMap = {
  start: "flex-start",
  end: "flex-end",
  center: "center",
  stretch: "stretch",
  between: "space-between",
  around: "space-around",
};
