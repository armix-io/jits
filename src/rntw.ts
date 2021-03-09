import { Theme } from "./theme/theme";
import { ClassName, Color, ColorName, ColorScale } from "./types";
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

export const rntw = (theme: Theme, classNames: ClassName[]) => {
  const { mode } = theme;
  const isDark = mode === "dark";

  const styles = { __dark: {} };
  const activeStyles = { __dark: {} };

  classNames.forEach((className) => {
    const parts = className.split(":");
    const fnarg = parts.pop() as ClassName;
    const envs = parts;

    let target = styles;
    if (envs.includes("active")) {
      target = activeStyles;
    }

    if (envs.includes("dark")) {
      if (isDark) Object.assign(target.__dark, parse(theme, fnarg));
    } else {
      Object.assign(target, parse(theme, fnarg));
    }
  });

  return {
    ...styles,
    ...styles.__dark,
    active: { ...activeStyles, ...activeStyles.__dark },
  };
};
