import { rem } from "./rem";

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
} as const;

export const FontWeightMap = {
  thin: "100",
  extralight: "200",
  light: "300",
  normal: "400",
  medium: "500",
  semibold: "600",
  bold: "700",
  extrabold: "800",
  black: "900",
} as const;

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
} as const;

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
} as const;

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
} as const;

export const BorderWidthMap = {
  DEFAULT: 1,
  0: 0,
  2: 2,
  4: 4,
  8: 8,
} as const;

export const BorderStyleMap = {
  solid: "solid",
  dotted: "dotted",
  dashed: "dashed",
} as const;

export const ZIndexMap = {
  0: 0,
  10: 10,
  20: 20,
  30: 30,
  40: 40,
  50: 50,
} as const;

export const TrackingMap = {
  tighter: rem(-0.05),
  tight: rem(-0.025),
  normal: rem(0),
  wide: rem(0.025),
  wider: rem(0.05),
  widest: rem(0.1),
} as const;

export const LeadingMap = {
  3: rem(0.75),
  4: rem(1),
  5: rem(1.25),
  6: rem(1.5),
  7: rem(1.75),
  8: rem(2),
  9: rem(2.25),
  10: rem(2.5),
  none: 1,
  tight: 1.25,
  snug: 1.375,
  normal: 1.5,
  relaxed: 1.625,
  loose: 2,
} as const;
