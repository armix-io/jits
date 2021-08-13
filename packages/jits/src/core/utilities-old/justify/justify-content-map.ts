export type JustifyContentMap = Record<
  "start" | "end" | "center" | "between" | "around" | "evenly",
  string
>;

export const defaultJustifyContentMap: JustifyContentMap = {
  start: "flex-start",
  end: "flex-end",
  center: "center",
  between: "space-between",
  around: "space-around",
  evenly: "space-evenly",
};
