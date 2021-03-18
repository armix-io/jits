import { Theme } from "./theme";
import { Color, ColorName, ColorScale } from "./types";

export const getColor = (theme: Theme, color: Color) => {
  if (color === "transparent") {
    return theme.colors.transparent as string;
  } else if (color === "black") {
    return theme.colors.black as string;
  } else if (color === "white") {
    return theme.colors.white as string;
  } else {
    const args = color.split("-");
    const name = args[0] as ColorName;
    const scale = parseInt(args[1]) as ColorScale;
    return theme.colors[name][scale];
  }
};
