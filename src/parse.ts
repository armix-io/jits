import { ViewStyle, TextStyle } from "react-native";
import { Theme } from "./theme";
import { ClassName, Color } from "./types";
import { getTarget } from "./get-target";
import { getProps } from "./get-props";
import { getColor } from "./get-color";
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
  FontWeightMap,
} from "./maps";

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
  } else if (op === "font") {
    const { value } = props;
    const fontWeight = FontWeightMap[value as keyof typeof FontWeightMap];
    if (fontWeight) {
      return { fontWeight };
    }
    const fontSize = FontSizeMap[value as keyof typeof FontSizeMap];
    if (fontSize) {
      return { fontSize };
    }
  } else if (op === "rounded") {
    const { scale, target } = props;
    const value =
      BorderRadiusMap[scale as keyof typeof BorderRadiusMap] ??
      BorderRadiusMap.DEFAULT;
    if (target === "l") {
      return {
        borderTopLeftRadius: value,
        borderBottomLeftRadius: value,
      };
    } else if (target === "r") {
      return {
        borderTopRightRadius: value,
        borderBottomRightRadius: value,
      };
    } else if (target === "t") {
      return {
        borderTopLeftRadius: value,
        borderTopRightRadius: value,
      };
    } else if (target === "b") {
      return {
        borderBottomLeftRadius: value,
        borderBottomRightRadius: value,
      };
    }
    return {
      [`border${getTarget(target) || ""}Radius`]: value,
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
    const value =
      BorderWidthMap[scale as keyof typeof BorderWidthMap] ||
      BorderWidthMap.DEFAULT;
    return { [`border${getTarget(target) || ""}Width`]: value };
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
  } else {
    console.warn(`[rntw.parse] className '${className}' is not implemented`);
  }
};
