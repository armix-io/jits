import { rem } from "./rem";

export const FlexMap = {
  auto: { flexGrow: 1, flexShrink: 1, flexBasis: "auto" },
  initial: { flexGrow: 0, flexShrink: 1, flexBasis: "auto" },
  none: { flexGrow: 0, flexShrink: 0, flexBasis: "auto" },
  col: { flexDirection: "column" },
  "col-reverse": { flexDirection: "column-reverse" },
  row: { flexDirection: "row" },
  "row-reverse": { flexDirection: "row-reverse" },
  grow: { flexGrow: 1 },
  "grow-0": { flexGrow: 0 },
  shrink: { flexShrink: 1 },
  "shrink-0": { flexShrink: 0 },
  wrap: { flexWrap: "wrap" },
  "wrap-reverse": { flexWrap: "wrap-reverse" },
  nowrap: { flexWrap: "nowrap" },
};

export const AlignSelfMap = {
  auto: "auto",
  center: "center",
  end: "flex-end",
  start: "flex-start",
  stretch: "stretch",
};

export const AlignItemsMap = {
  baseline: "baseline",
  center: "center",
  end: "flex-end",
  start: "flex-start",
  stretch: "stretch",
};

export const AlignContentMap = {
  around: "space-around",
  between: "space-between",
  center: "center",
  end: "flex-end",
  start: "flex-start",
  stretch: "stretch",
};

export const JustifyContentMap = {
  around: "space-around",
  between: "space-between",
  center: "center",
  end: "flex-end",
  evenly: "space-evenly",
  start: "flex-start",
};

export const FontSizeMap = {
  "2xl": rem(1.5),
  "3xl": rem(1.875),
  "4xl": rem(2.25),
  "5xl": rem(3),
  "6xl": rem(4),
  base: rem(1),
  lg: rem(1.125),
  sm: rem(0.875),
  xl: rem(1.25),
  xs: rem(0.75),
};

export const OpacityMap = {
  0: 0,
  25: 0.25,
  50: 0.5,
  75: 0.75,
  100: 1,
};

export const SpacingMap = {
  0: 0,
  1: rem(0.25),
  2: rem(0.5),
  3: rem(0.75),
  4: rem(1),
  5: rem(1.25),
  6: rem(1.5),
  8: rem(2),
  10: rem(2.5),
  12: rem(3),
  16: rem(4),
  20: rem(5),
  24: rem(6),
  32: rem(8),
  40: rem(10),
  48: rem(12),
  56: rem(14),
  64: rem(16),
};
