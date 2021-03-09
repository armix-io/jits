import { ColorName, ColorScale } from "./styles";
import { colors } from "./colors";

type Mode = "light" | "dark";

export type { Mode as ThemeMode };

export type Theme = {
  mode: Mode;
  colors: Record<ColorName, string | Record<ColorScale, string>>;
};

export const defaultTheme: Theme = {
  mode: "light",
  colors: {
    transparent: "transparent",
    black: colors.black,
    white: colors.white,
    gray: colors.coolGray,
    red: colors.red,
    yellow: colors.amber,
    green: colors.emerald,
    blue: colors.blue,
    indigo: colors.indigo,
    purple: colors.violet,
    pink: colors.pink,
  },
};
