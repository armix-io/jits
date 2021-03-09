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
  auto: { alignSelf: "auto" },
  center: { alignSelf: "center" },
  end: { alignSelf: "flex-end" },
  start: { alignSelf: "flex-start" },
  stretch: { alignSelf: "stretch" },
};

export const AlignItemsMap = {
  baseline: { alignItems: "baseline" },
  center: { alignItems: "center" },
  end: { alignItems: "flex-end" },
  start: { alignItems: "flex-start" },
  stretch: { alignItems: "stretch" },
};

export const AlignContentMap = {
  around: { alignContent: "space-around" },
  between: { alignContent: "space-between" },
  center: { alignContent: "center" },
  end: { alignContent: "flex-end" },
  start: { alignContent: "flex-start" },
  stretch: { alignContent: "stretch" },
};

export const JustifyContentMap = {
  around: { justifyContent: "space-around" },
  between: { justifyContent: "space-between" },
  center: { justifyContent: "center" },
  end: { justifyContent: "flex-end" },
  evenly: { justifyContent: "space-evenly" },
  start: { justifyContent: "flex-start" },
};

export const FontSizeMap = {
  "2xl": { fontSize: rem(1.5) },
  "3xl": { fontSize: rem(1.875) },
  "4xl": { fontSize: rem(2.25) },
  "5xl": { fontSize: rem(3) },
  "6xl": { fontSize: rem(4) },
  base: { fontSize: rem(1) },
  lg: { fontSize: rem(1.125) },
  sm: { fontSize: rem(0.875) },
  xl: { fontSize: rem(1.25) },
  xs: { fontSize: rem(0.75) },
};
