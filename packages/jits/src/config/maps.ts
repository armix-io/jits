export const AlignSelfMap = {
  auto: "auto",
  start: "flex-start",
  end: "flex-end",
  center: "center",
  stretch: "stretch",
  baseline: "baseline",
} as const;

export const AlignItemsMap = {
  start: "flex-start",
  end: "flex-end",
  center: "center",
  stretch: "stretch",
  baseline: "baseline",
} as const;

export const AlignContentMap = {
  start: "flex-start",
  end: "flex-end",
  center: "center",
  stretch: "stretch",
  between: "space-between",
  around: "space-around",
} as const;

export const JustifyContentMap = {
  start: "flex-start",
  end: "flex-end",
  center: "center",
  between: "space-between",
  around: "space-around",
  evenly: "space-evenly",
} as const;

// rem()
export const FontSizeMap = {
  "2xl": 1.5,
  "3xl": 1.875,
  "4xl": 2.25,
  "5xl": 3,
  "6xl": 4,
  base: 1,
  lg: 1.125,
  sm: 0.875,
  xl: 1.25,
  xs: 0.75,
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

// rem()
export const SpacingMap = {
  0: 0,
  0.5: 0.125,
  1: 0.25,
  1.5: 0.375,
  2: 0.5,
  2.5: 0.625,
  3: 0.75,
  3.5: 0.875,
  4: 1,
  5: 1.25,
  6: 1.5,
  7: 1.75,
  8: 2,
  9: 2.25,
  10: 2.5,
  11: 2.75,
  12: 3,
  14: 3.5,
  16: 4,
  20: 5,
  24: 6,
  28: 7,
  32: 8,
  36: 9,
  40: 10,
  44: 11,
  48: 12,
  52: 13,
  56: 14,
  60: 15,
  64: 16,
  72: 18,
  80: 20,
  96: 24,
  px: 1,
} as const;

// rem()
export const BorderRadiusMap = {
  none: 0,
  sm: 0.125,
  DEFAULT: 0.25,
  md: 0.375,
  lg: 0.5,
  xl: 0.75,
  "2xl": 1,
  "3xl": 1.5,
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

// rem()
export const TrackingMap = {
  tighter: -0.05,
  tight: -0.025,
  normal: 0,
  wide: 0.025,
  wider: 0.05,
  widest: 0.1,
} as const;

// rem() 3 - 10
export const LeadingMap = {
  3: 0.75,
  4: 1,
  5: 1.25,
  6: 1.5,
  7: 1.75,
  8: 2,
  9: 2.25,
  10: 2.5,
  none: 1,
  tight: 1.25,
  snug: 1.375,
  normal: 1.5,
  relaxed: 1.625,
  loose: 2,
} as const;

export const TextAlignMap = {
  left: "left",
  right: "right",
  center: "center",
  justify: "justify",
} as const;

export const TextAlignVerticalMap = {
  top: "top",
  bottom: "bottom",
  middle: "center",
  auto: "auto",
} as const;

export const WritingDirectionMap = {
  ltr: "ltr",
  rtl: "rtl",
} as const;

export const TextDecorationStyleMap = {
  solid: "solid",
  double: "double",
  dotted: "dotted",
  dashed: "dashed",
} as const;

export const TextDecorationLineMap = {
  underline: "underline",
  "line-through": "line-through",
  "no-underline": "none",
};

export const OverflowMap = {
  visible: "visible",
  hidden: "hidden",
  scroll: "scroll",
} as const;

export const TextTransformMap = {
  uppercase: "uppercase",
  lowercase: "lowercase",
  capitalize: "capitalize",
  "normal-case": "none",
} as const;
