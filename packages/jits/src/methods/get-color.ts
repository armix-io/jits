import { Theme } from "./theme";
import { Color } from "./types";
import { maybe } from "./maybe";

export const getColor = (options: ) => (color: Color) => {
  const [$name, $scale] = color.split("-") as [string, string | undefined];

  const colorSetOrValue = maybe(theme.colors, $name);
  if (!colorSetOrValue) return;
  if (typeof colorSetOrValue === "string") {
    return colorSetOrValue;
  }

  const colorSet = colorSetOrValue;
  const colorValue = maybe(colorSet, $scale);
  if (!colorValue) return;
  return colorValue;
};
