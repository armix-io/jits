export type FontSizeMap = Record<
  "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "base" | "lg" | "sm" | "xl" | "xs",
  number
>;

// rem()
export const defaultFontSizeMap: FontSizeMap = {
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
};
