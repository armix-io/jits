export type AlignSelfMap = Record<
  "auto" | "start" | "end" | "center" | "stretch" | "baseline",
  string
>;

export const defaultAlignSelfMap: AlignSelfMap = {
  auto: "auto",
  start: "flex-start",
  end: "flex-end",
  center: "center",
  stretch: "stretch",
  baseline: "baseline",
};
