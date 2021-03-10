import { ViewStyle, TextStyle } from "react-native";
import { Theme } from "./theme";
import { ClassName, Color, ColorName, ColorScale, Variants } from "./types";
import {
  FlexMap,
  AlignSelfMap,
  AlignItemsMap,
  AlignContentMap,
  JustifyContentMap,
  OpacityMap,
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
    const alignSelf = AlignSelfMap[arg as keyof typeof AlignSelfMap] as
      | string
      | undefined;
    return alignSelf && { alignSelf };
  } else if (fn === "items") {
    const alignItems = AlignItemsMap[arg as keyof typeof AlignItemsMap] as
      | string
      | undefined;
    return alignItems && { alignItems };
  } else if (fn === "content") {
    const alignContent = AlignContentMap[arg as keyof typeof AlignContentMap];
    return alignContent && { alignContent };
  } else if (fn === "justify") {
    const justifyContent = JustifyContentMap[
      arg as keyof typeof JustifyContentMap
    ] as string | undefined;
    return justifyContent && { justifyContent };
  } else if (fn === "opacity") {
    const opacity = OpacityMap[parseInt(arg) as keyof typeof OpacityMap] as
      | number
      | undefined;
    return opacity && { opacity };
  } else if (fn === "text") {
    const fontSize = FontSizeMap[arg as keyof typeof FontSizeMap];
    if (fontSize) return { fontSize };
    const color = getColor(theme, arg as Color);
    return color && { color };
  } else if (fn === "bg") {
    const backgroundColor = getColor(theme, arg as Color);
    return backgroundColor && { backgroundColor };
  } else {
    console.warn(`[rntw.parse] className '${className}' is not implemented`);
  }
};

// exclude symbol from color because of OpaqueColorValue as symbol causing
// type errors for common react componnents, and isn't needed for typechecking
export type StyleNode = ViewStyle &
  Omit<TextStyle, "color"> & { color?: Exclude<TextStyle["color"], symbol> };

// without variants
export type { StyleNode as RNTWStyleNode };

// with variants, return type of rntw
export type RNTWStyle = StyleNode & Partial<Record<Variants, StyleNode>>;

export type WithRNTWProps<P> = P & { className?: ClassName | ClassName[] };

export const rntw = (theme: Theme, classNames: ClassName[]): RNTWStyle => {
  const { mode } = theme;
  const isThemeDark = mode === "dark";

  const styles = { __overrides: {} };
  const varaintStyles = new Map<string, { __overrides: {} }>();

  classNames.forEach((className) => {
    const parts = className.split(":");
    const fnarg = parts.pop() as ClassName;
    const variants = new Set(parts);

    const isDarkVariant = variants.delete("dark");

    // or || any other override variant
    const isOverrideVariant = isDarkVariant;

    // if no variants, add ROOT to use to map to root styles in forEach logic
    if (!variants.size) variants.add("ROOT");

    variants.forEach((variant) => {
      const target =
        variant === "ROOT"
          ? styles
          : varaintStyles.get(variant) || { __overrides: {} };

      if (isOverrideVariant) {
        if (isDarkVariant && isThemeDark) {
          Object.assign(target.__overrides, parse(theme, fnarg));
        }
      } else {
        Object.assign(target, parse(theme, fnarg));
      }

      if (variant !== "ROOT") varaintStyles.set(variant, target);
    });
  });

  const { __overrides, ...__styles } = styles;

  const __variants = {};
  varaintStyles.forEach((styles, variant) => {
    const { __overrides, ...__styles } = styles;
    Object.assign(__variants, {
      [variant]: Object.assign(__styles, __overrides),
    });
  });

  return Object.assign(__styles, __overrides, __variants);
};
