import { ViewStyle, TextStyle } from "react-native";
import { Theme } from "./theme/theme";
import { ClassName, Color, ColorName, ColorScale, Envs } from "./types";
import {
  FlexMap,
  AlignSelfMap,
  AlignItemsMap,
  AlignContentMap,
  JustifyContentMap,
  FontSizeMap,
} from "./maps";

export const getColor = (theme: Theme, color: Color) => {
  if (color === "transparent") {
    return theme.colors.transparent;
  } else if (color === "black") {
    return theme.colors.black;
  } else if (color === "white") {
    return theme.colors.white;
  } else {
    const args = color.split("-");
    const name = args[0] as ColorName;
    const scale = parseInt(args[1]) as ColorScale;
    return theme.colors[name][scale];
  }
};

export const parse = (theme: Theme, className: ClassName) => {
  const parts = className.split("-");

  const [fn, ...args] = parts;
  const arg = args.join("-");

  if (fn === "flex") {
    if (!args.length) return { display: "flex" };
    return FlexMap[arg as keyof typeof FlexMap] || { flex: parseInt(args[0]) };
  } else if (fn === "align") {
    return AlignSelfMap[arg as keyof typeof AlignSelfMap];
  } else if (fn === "items") {
    return AlignItemsMap[arg as keyof typeof AlignItemsMap];
  } else if (fn === "content") {
    return AlignContentMap[arg as keyof typeof AlignContentMap];
  } else if (fn === "justify") {
    return JustifyContentMap[arg as keyof typeof JustifyContentMap];
  } else if (fn === "text") {
    return (
      FontSizeMap[arg as keyof typeof FontSizeMap] || {
        color: getColor(theme, arg as Color),
      }
    );
  } else if (fn === "bg") {
    const backgroundColor = getColor(theme, arg as Color);
    return { backgroundColor };
  } else {
    console.warn(`[rntw.parse] className '${className}' is not implemented`);
  }
};

// exclude symbol from color because of OpaqueColorValue as symbol causing
// type errors for common react componnents, and isn't needed for typechecking
export type Style = ViewStyle &
  Omit<TextStyle, "color"> & { color?: Exclude<TextStyle["color"], symbol> };

// without envs
export type { Style as RNTWStyleSimple };

// with envs, return type of rntw
export type RNTWStyle = Style & Partial<Record<Envs, Style>>;

export const rntw = (theme: Theme, classNames: ClassName[]): RNTWStyle => {
  const { mode } = theme;
  const isDark = mode === "dark";

  const styles = { __overrides: {} };
  const envStyles = new Map<string, { __overrides: {} }>();

  classNames.forEach((className) => {
    const parts = className.split(":");
    const fnarg = parts.pop() as ClassName;
    const envs = new Set(parts);

    const isEnvDark = envs.delete("dark");

    envs.forEach((env) => {
      const styles = envStyles.get(env) || { __overrides: {} };

      if (isDark && isEnvDark) {
        Object.assign(styles.__overrides, parse(theme, fnarg));
      } else {
        Object.assign(styles, parse(theme, fnarg));
      }

      envStyles.set(env, styles);
    });

    if (isDark && isEnvDark) {
      Object.assign(styles.__overrides, parse(theme, fnarg));
    } else {
      Object.assign(styles, parse(theme, fnarg));
    }
  });

  const { __overrides, ...__styles } = styles;

  const __envs = {};
  envStyles.forEach((styles, env) => {
    const { __overrides, ...__styles } = styles;
    Object.assign(__envs, { [env]: Object.assign(__styles, __overrides) });
  });

  return Object.assign(__styles, __overrides, __envs);
};
