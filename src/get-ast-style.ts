import { Color } from "./types";
import { defaultTheme, Theme } from "./theme";
import { AST } from "./get-ast";
import { getTarget } from "./get-target";
import {
  BorderRadiusMap,
  BorderStyleMap,
  BorderWidthMap,
  FontSizeMap,
  FontWeightMap,
  LeadingMap,
  OpacityMap,
  SpacingMap,
  TrackingMap,
  ZIndexMap,
} from "./maps";
import { getColor } from "./get-color";
import { maybe } from "./maybe";

export function getAstStyle(theme: Theme, ast: AST) {
  const { op, target: $target, value: $value } = ast;

  const requiresValue = () => {
    throw new Error(`requires value, ${ast.__function}`);
  };
  const invalidValue = () => {
    throw new Error(`invalid value '${$value}', ${ast.__function}`);
  };
  const invalidOp = () => {
    throw new Error(`invalid op '${op}', ${ast.__function}`);
  };

  if (op === "m" || op === "p") {
    if (!$value) {
      return requiresValue();
    }

    const key = `${op === "m" ? "margin" : "padding"}${
      getTarget($target) || ""
    }`;

    const sign = $value.startsWith("-") ? -1 : 1;
    const value = maybe(SpacingMap, $value.replace("-", ""));
    if (value !== undefined) {
      return {
        [key]: value * sign,
      };
    }

    return invalidValue();
  }

  if (op === "h" || op === "w") {
    if (!$value) {
      return requiresValue();
    }

    const key = op === "h" ? "height" : "width";

    const value = maybe(SpacingMap, $value);
    if (value !== undefined) {
      return {
        [key]: value,
      };
    }

    return invalidValue();
  }

  if (
    op === "top" ||
    op === "bottom" ||
    op === "left" ||
    op === "right" ||
    op === "start" ||
    op === "end"
  ) {
    const key = op;

    const value = maybe(SpacingMap, $value);
    if (value !== undefined) {
      return {
        [key]: value,
      };
    }

    return invalidValue();
  }

  if (op === "overflow") {
    return {
      overflow: $value,
    };
  }

  if (op === "hidden") {
    return {
      display: "none",
    };
  }

  if (op === "flex") {
    if (!$value) {
      return {
        display: "flex",
      };
    }

    if ($value === "auto") {
      return { flexGrow: 1, flexShrink: 1, flexBasis: "auto" };
    }

    if ($value === "initial") {
      return { flexGrow: 0, flexShrink: 1, flexBasis: "auto" };
    }

    if ($value === "none") {
      return { flexGrow: 0, flexShrink: 0, flexBasis: "auto" };
    }

    const value = parseInt($value);
    if (!isNaN(value)) {
      return { flex: value };
    }

    return invalidValue();
  }

  if (op.startsWith("flex")) {
    if (op.endsWith("-row")) {
      return { flexDirection: `row${$value ? `-${$value}` : ""}` };
    }

    if (op.endsWith("-col")) {
      return { flexDirection: `column${$value ? `-${$value}` : ""}` };
    }

    if (op.endsWith("-grow")) {
      return { flexGrow: $value ? $value : "1" };
    }

    if (op.endsWith("-shrink")) {
      return { flexShrink: $value ? $value : "1" };
    }

    if (op.endsWith("-wrap")) {
      return { flexWrap: `wrap${$value ? `-${$value}` : ""}` };
    }

    if (op.endsWith("-nowrap")) {
      return { flexWrap: "nowrap" };
    }
  }

  if (op === "self") {
    if (!$value) {
      return requiresValue();
    }

    const value = `${
      $value === "start" || $value === "end" ? "flex-" : ""
    }${$value}`;

    return {
      alignSelf: value,
    };
  }

  if (op === "items") {
    if (!$value) {
      return requiresValue();
    }

    const value = `${
      $value === "start" || $value === "end" ? "flex-" : ""
    }${$value}`;

    return {
      alignItems: value,
    };
  }

  if (op === "content") {
    if (!$value) {
      return requiresValue();
    }

    const value = `${
      $value === "start" || $value === "end"
        ? "flex-"
        : $value === "between" || $value === "around" || $value === "evenly"
        ? "space-"
        : ""
    }${$value}`;

    return {
      alignContent: value,
    };
  }

  if (op === "justify") {
    if (!$value) {
      return requiresValue();
    }

    const value = `${
      $value === "start" || $value === "end"
        ? "flex-"
        : $value === "between" || $value === "around" || $value === "evenly"
        ? "space-"
        : ""
    }${$value}`;

    return {
      justifyContent: value,
    };
  }

  if (op === "bg") {
    if (!$value) {
      return requiresValue();
    }

    const color = getColor(theme, $value as Color);
    if (color) {
      return {
        backgroundColor: color,
      };
    }

    return invalidValue();
  }

  if (op === "opacity") {
    if (!$value) {
      return requiresValue();
    }

    const opacity = maybe(OpacityMap, $value);
    if (opacity) {
      return {
        opacity,
      };
    }

    return invalidValue();
  }

  if (op === "border") {
    const style = maybe(BorderStyleMap, $value);
    if (style) {
      return {
        borderStyle: style,
      };
    }

    const key = `border${getTarget($target) || ""}`;

    if (!$value) {
      return {
        [`${key}Width`]: BorderWidthMap.DEFAULT,
      };
    }

    const width = maybe(BorderWidthMap, $value);
    if (width !== undefined) {
      return {
        [`${key}Width`]: width,
      };
    }

    const color = getColor(theme, $value as Color);
    if (color) {
      return {
        [`${key}Color`]: color,
      };
    }

    return invalidValue();
  }

  if (op === "rounded") {
    const value = maybe(BorderRadiusMap, $value) ?? BorderRadiusMap.DEFAULT;

    if ($target === "l") {
      return {
        borderTopLeftRadius: value,
        borderBottomLeftRadius: value,
      };
    } else if ($target === "r") {
      return {
        borderTopRightRadius: value,
        borderBottomRightRadius: value,
      };
    } else if ($target === "t") {
      return {
        borderTopLeftRadius: value,
        borderTopRightRadius: value,
      };
    } else if ($target === "b") {
      return {
        borderBottomLeftRadius: value,
        borderBottomRightRadius: value,
      };
    }
    return {
      [`border${getTarget($target) || ""}Radius`]: value,
    };
  }

  if (op === "absolute" || op === "relative") {
    return {
      position: op,
    };
  }

  if (op === "z") {
    if (!$value) {
      return requiresValue();
    }

    const value = maybe(ZIndexMap, $value);
    if (value !== undefined) {
      return {
        zIndex: value,
      };
    }

    return invalidValue();
  }

  if (op === "shadow") {
    return console.warn(`not implemented, ${ast.__function}`);
  }

  if (op === "aspect") {
    return console.warn(`not implemented, ${ast.__function}`);
  }

  if (op === "ltr" || op === "rtl") {
    return {
      direction: op,
    };
  }

  if (op === "text") {
    if (!$value) {
      return requiresValue();
    }

    const fontSize = maybe(FontSizeMap, $value);
    if (fontSize) {
      return { fontSize };
    }

    const textAlign =
      ["left", "right", "center", "justify"].includes($value) && $value;
    if (textAlign) {
      return { textAlign };
    }

    const textAlignVertical =
      ["top", "bottom", "middle", "auto"].includes($value) && $value;
    if (textAlignVertical) {
      return { textAlignVertical };
    }

    const writingDirection = ["ltr", "rtl"].includes($value) && $value;
    if (writingDirection) {
      return { writingDirection };
    }

    const color = getColor(theme, $value as Color);
    if (color) {
      return { color };
    }

    return invalidValue();
  }

  if (op === "font") {
    if (!$value) {
      return requiresValue();
    }

    const fontWeight = maybe(FontWeightMap, $value);
    if (fontWeight) {
      return { fontWeight };
    }

    const os = defaultTheme.os;
    if (!os) {
      return console.warn(`os unknown, ${ast.__function}`);
    }

    const fontFamily = maybe(defaultTheme.fonts, $value);
    if (fontFamily) {
      return { fontFamily: fontFamily[os] };
    }

    return invalidValue();
  }

  if (op.endsWith("italic")) {
    return {
      fontStyle: op === "italic" ? "italic" : "normal",
    };
  }

  if (op === "tracking") {
    if (!$value) {
      return requiresValue();
    }

    const letterSpacing = maybe(TrackingMap, $value);
    if (letterSpacing) {
      return { letterSpacing };
    }

    return invalidValue();
  }

  if (op === "leading") {
    if (!$value) {
      return requiresValue();
    }

    const lineHeight = maybe(LeadingMap, $value);
    if (lineHeight) {
      return { lineHeight };
    }

    return invalidValue();
  }

  if (
    op === "uppercase" ||
    op === "lowercase" ||
    op === "capitalize" ||
    op === "normal-case"
  ) {
    if (op === "normal-case") {
      return {
        textTransform: "none",
      };
    }
    return {
      textTransform: op,
    };
  }

  if (op.startsWith("underline")) {
    return Object.assign(
      {
        textDecorationLine: "underline",
      },
      $value ? { textDecorationStyle: $value } : undefined
    );
  }

  if (op === "line-through" || op === "no-underline") {
    if (op === "no-underline") {
      return {
        textDecorationLine: "none",
      };
    }
    return {
      textDecorationLine: op,
    };
  }

  if (op === "tint") {
    if (!$value) {
      return requiresValue();
    }

    const tintColor = getColor(theme, $value as Color);
    if (tintColor) {
      return { tintColor };
    }

    return invalidValue();
  }

  if (op === "overlay") {
    if (!$value) {
      return requiresValue();
    }

    const overlayColor = getColor(theme, $value as Color);
    if (overlayColor) {
      return { overlayColor };
    }

    return invalidValue();
  }

  return invalidOp();
}
