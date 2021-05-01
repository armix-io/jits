import { maybe } from "../types";
import { Color } from "./color";
import { ColorMap } from "./color-map";

export const getColor = (map: ColorMap) => (color: Color) => {
  const [$name, $scale] = color.split("-") as [string, string | undefined];

  const colorSetOrValue = maybe(map, $name);
  if (!colorSetOrValue) return;
  if (typeof colorSetOrValue === "string") {
    return colorSetOrValue;
  }

  const colorSet = colorSetOrValue;
  const colorValue = maybe(colorSet, $scale);
  if (!colorValue) return;

  return colorValue;
};
