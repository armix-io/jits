import { ColorName, ColorSetName, ColorSetScale } from "./color";
import { colors } from "./colors";

export type ColorMapAlias = string;
export type ColorMapSet = Record<ColorSetScale, string>;

export type ColorMap = Record<Exclude<ColorName, ColorSetName>, ColorMapAlias> &
  Record<ColorSetName, ColorMapSet>;

export const defaultColorMap: ColorMap = {
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
};
