export type LeadingMap = Record<
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | "none"
  | "tight"
  | "snug"
  | "normal"
  | "relaxed"
  | "loose",
  number
>;

// rem() 3 - 10
export const defaultLeadingMap: LeadingMap = {
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
};
