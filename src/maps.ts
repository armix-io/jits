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
} as const;

export const AlignSelfMap = {
  auto: "auto",
  center: "center",
  end: "flex-end",
  start: "flex-start",
  stretch: "stretch",
} as const;

export const AlignItemsMap = {
  baseline: "baseline",
  center: "center",
  end: "flex-end",
  start: "flex-start",
  stretch: "stretch",
} as const;

export const AlignContentMap = {
  around: "space-around",
  between: "space-between",
  center: "center",
  end: "flex-end",
  start: "flex-start",
  stretch: "stretch",
} as const;

export const JustifyContentMap = {
  around: "space-around",
  between: "space-between",
  center: "center",
  end: "flex-end",
  evenly: "space-evenly",
  start: "flex-start",
} as const;

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
  5: 0.05,
  10: 0.1,
  20: 0.2,
  25: 0.25,
  30: 0.3,
  40: 0.4,
  50: 0.5,
  60: 0.6,
  70: 0.7,
  75: 0.75,
  80: 0.8,
  90: 0.9,
  95: 0.95,
  100: 1,
};

export const SpacingMap = {
  0: 0,
  0.5: rem(0.125),
  1: rem(0.25),
  1.5: rem(0.375),
  2: rem(0.5),
  2.5: rem(0.625),
  3: rem(0.75),
  3.5: rem(0.875),
  4: rem(1),
  5: rem(1.25),
  6: rem(1.5),
  7: rem(1.75),
  8: rem(2),
  9: rem(2.25),
  10: rem(2.5),
  11: rem(2.75),
  12: rem(3),
  14: rem(3.5),
  16: rem(4),
  20: rem(5),
  24: rem(6),
  28: rem(7),
  32: rem(8),
  36: rem(9),
  40: rem(10),
  44: rem(11),
  48: rem(12),
  52: rem(13),
  56: rem(14),
  60: rem(15),
  64: rem(16),
  72: rem(18),
  80: rem(20),
  96: rem(24),
  px: 1,
};

export const BorderRadiusMap = {
  none: 0,
  sm: rem(0.125),
  DEFAULT: rem(0.25),
  md: rem(0.375),
  lg: rem(0.5),
  xl: rem(0.75),
  "2xl": rem(1),
  "3xl": rem(1.5),
  full: 9999,
};

export const BorderWidthMap = {
  DEFAULT: 1,
  "0": 0,
  "2": 2,
  "4": 4,
  "8": 8,
};

export const BorderStyleMap = {
  solid: "solid",
  dotted: "dotted",
  dashed: "dashed",
};
