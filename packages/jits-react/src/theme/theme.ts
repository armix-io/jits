import { colors } from "../colors";
import { ColorName, ColorScale } from "../types";

type OS = "ios" | "android";

type Mode = "light" | "dark";

export type { Mode as ThemeMode };

export type Theme = {
  os: OS;
  mode: Mode;
  colors: Record<ColorName, string | Record<ColorScale, string>>;
  fonts: {
    sans: { ios: string; android: string };
    serif: { ios: string; android: string };
    mono: { ios: string; android: string };
  };
};

export const defaultTheme: Theme = {
  // runtime hack
  os: (undefined as unknown) as OS,
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
  fonts: {
    sans: { ios: "SF Pro", android: "sans-serif" },
    serif: { ios: "New York", android: "serif" },
    mono: { ios: "SF Mono", android: "monospace" },
  },
};
