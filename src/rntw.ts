import { ViewStyle, TextStyle } from "react-native";
import { Theme } from "./theme";
import {
  ClassName,
  Color,
  ColorName,
  ColorScale,
  Variants,
  Side,
  Corner,
  Target,
} from "./types";
import {
  FlexMap,
  AlignSelfMap,
  AlignItemsMap,
  AlignContentMap,
  JustifyContentMap,
  OpacityMap,
  FontSizeMap,
  BorderRadiusMap,
  BorderWidthMap,
  SpacingMap,
} from "./maps";
import { getProps } from "./parse";

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

const getTarget = (target: string | undefined) =>
  target && Target[target as keyof typeof Target];

export const parse = (
  theme: Theme,
  className: ClassName
): Partial<ViewStyle & TextStyle> | undefined => {
  const { op, ...props } = getProps(className);
  if (op === "m" || op === "p") {
    const { scale, target } = props;
    return {
      [`${op === "m" ? "margin" : "padding"}${
        getTarget(target) || ""
      }`]: SpacingMap[parseInt(scale!) as keyof typeof SpacingMap],
    };
  } else if (op === "border") {
    const { color, style, scale, target } = props;
    if (color) {
      return {
        [`border${getTarget(target) || ""}Color`]: getColor(theme, color),
      };
    }
    if (style) {
      return { borderStyle: style };
    }
    const width =
      BorderWidthMap[scale as keyof typeof BorderWidthMap] ||
      BorderWidthMap.DEFAULT;
    return { [`border${getTarget(target) || ""}Width`]: width };
  }

  const args = className.split("-");

  const a0 = args.shift();
  if (a0 === "flex") {
    const ax = args.join("-") as keyof typeof FlexMap;
    if (!ax) return { display: "flex" };
    return FlexMap[ax] || { flex: parseInt(ax) };
  } else if (a0 === "align") {
    const ax = args.join("-") as keyof typeof AlignSelfMap;
    const alignSelf = AlignSelfMap[ax];
    return (alignSelf && { alignSelf }) || undefined;
  } else if (a0 === "items") {
    const ax = args.join("-") as keyof typeof AlignItemsMap;
    const alignItems = AlignItemsMap[ax];
    return (alignItems && { alignItems }) || undefined;
  } else if (a0 === "content") {
    const ax = args.join("-") as keyof typeof AlignContentMap;
    const alignContent = AlignContentMap[ax];
    return alignContent && { alignContent };
  } else if (a0 === "justify") {
    const ax = args.join("-") as keyof typeof JustifyContentMap;
    const justifyContent = JustifyContentMap[ax];
    return (justifyContent && { justifyContent }) || undefined;
  } else if (a0 === "opacity") {
    const ax = parseInt(args.join("-")) as keyof typeof OpacityMap;
    const opacity = OpacityMap[ax];
    return (opacity && { opacity }) || undefined;
  } else if (a0 === "text") {
    const ax = args.join("-") as keyof typeof FontSizeMap;
    const fontSize = FontSizeMap[ax];
    if (fontSize) return { fontSize };
    const color = getColor(theme, ax as Color);
    return (color && { color }) || undefined;
  } else if (a0 === "bg") {
    const ax = args.join("-") as Color;
    const backgroundColor = getColor(theme, ax);
    return (backgroundColor && { backgroundColor }) || undefined;
    /**
     * BORDER (radius)
     */
  } else if (a0 === "rounded") {
    const [a1, a2] = args;
    let size: number;
    let corner: Corner | undefined = undefined;
    if (a1 && a2) {
      // rounded-{corner}-{size}
      corner = a1 as Corner;
      size = BorderRadiusMap[a2 as keyof typeof BorderRadiusMap];
    } else if (a1) {
      // rounded-{corner|size}
      size = BorderRadiusMap[a1 as keyof typeof BorderRadiusMap];
      // if size undefined, the argument is a corner using default size
      if (!size) {
        corner = a1 as Corner;
        size = BorderRadiusMap.DEFAULT;
      } else {
        // size is the arg, all corners are the target
      }
    } else {
      // rounded
      // no args, all corners with default size
      size = BorderRadiusMap.DEFAULT;
    }

    return !corner
      ? { borderRadius: size }
      : corner === "tr"
      ? { borderTopRightRadius: size }
      : corner === "tl"
      ? { borderTopLeftRadius: size }
      : corner === "br"
      ? { borderBottomRightRadius: size }
      : corner === "bl"
      ? { borderBottomLeftRadius: size }
      : undefined;
    /**
     * BORDER
     */
  } else if (a0 === "border") {
    // const [a1, a2] = args;
    // if (a1 === "opacity") {
    //   console.warn(`[rntw.parse] className '${className}' is not implemented`);
    //   return undefined;
    // }
    // // [(side|corner)?, scale?]
    // const reBorderRadius = /^rounded(?:-(tr|tl|br|bl|t|r|b|l))?(?:-(none|sm|md|lg|xl|2xl|3xl|full))?/;
    // // [side?, scale?]
    // const reBorderWidth = /^border(?:-(t|r|b|l))?(?:-(0|2|4|8))?/;
    // // [side?, color, scale?]
    // const reBorderColor = /^border(?:-(t|r|b|l))?-(\w+)-(\d+)$/;
    // // [side?, scale]
    // const reBorderOpacity = /^border-opacity(?:-(t|r|b|l))?-(\d+)$/;
    // if (Object.keys(BorderStyleMap).includes(a1)) {
    //   const borderStyle = BorderStyleMap[
    //     a1 as keyof typeof BorderStyleMap
    //   ] as keyof typeof BorderStyleMap;
    //   return { borderStyle };
    // }
    // let side: Side | undefined = ["t", "r", "b", "l"].includes(a1)
    //   ? (a1 as Side)
    //   : undefined;
    // if (a1 && a2) {
    //   // rounded-{side}-{size}
    //   side = a1 as Side;
    //   size = BorderWidthMap[a2 as keyof typeof BorderWidthMap];
    // } else if (a1) {
    //   // rounded-{side|size}
    //   size = BorderWidthMap[a1 as keyof typeof BorderWidthMap];
    //   // if size undefined, the argument is a side using default size
    //   if (!size) {
    //     side = a1 as Side;
    //     size = BorderWidthMap.DEFAULT;
    //   } else {
    //     // size is the arg, all corners are the target
    //   }
    // } else {
    //   // rounded
    //   // no args, all sides with default size
    //   size = BorderWidthMap.DEFAULT;
    // }
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

export type WithRNTWProps<P> = P & { className?: ClassName[] };

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
