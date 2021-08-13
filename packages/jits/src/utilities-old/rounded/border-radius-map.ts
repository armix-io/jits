export type BorderRadiusMap = Record<
  "none" | "sm" | "DEFAULT" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full",
  number
>;

export const defaultBorderRadiusMap: BorderRadiusMap = {
  none: 0,
  sm: 0.125,
  DEFAULT: 0.25,
  md: 0.375,
  lg: 0.5,
  xl: 0.75,
  "2xl": 1,
  "3xl": 1.5,
  full: 9999,
};
