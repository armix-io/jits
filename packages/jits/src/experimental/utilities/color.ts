import { colors } from "./colors";

export const colorMap = {
  transparent: colors.transparent,
  black: colors.black,
  white: colors.white,
  blue: colors.blue,
  gray: colors.coolGray,
  green: colors.emerald,
  indigo: colors.indigo,
  pink: colors.pink,
  purple: colors.violet,
  red: colors.red,
  yellow: colors.amber,
} as const;

export const colorUnits = [
  "50",
  "100",
  "200",
  "300",
  "400",
  "500",
  "600",
  "700",
  "800",
  "900",
] as const;

export const colorAliases = ["transparent", "white", "black"] as const;

export const colorSets = [
  "blue",
  "gray",
  "green",
  "indigo",
  "pink",
  "purple",
  "red",
  "yellow",
] as const;
