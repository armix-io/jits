import { Parse } from "../parse";
import { maybe } from "../../types";
import { Color, getColor, defaultColorMap } from "../../color";
import { Side, getTarget } from "../../target";
import { BorderStyleMap, defaultBorderStyleMap } from "./border-style-map";
import { BorderWidthMap, defaultBorderWidthMap } from "./border-width-map";

export type Utility = `border${
  | ""
  | `${"" | `-${Side}`}${
      | ""
      | `-${keyof BorderStyleMap}`
      | `-${Exclude<keyof BorderWidthMap, "DEFAULT">}`
      | `-${Color}`}`}`;

export const ops = ["opacity"] as const;

export const parse: Parse = ({ ast, config, invalidValue }) => {
  const { target: $target, value: $value } = ast;

  const style = maybe(defaultBorderStyleMap, $value);
  if (style !== undefined) {
    return {
      borderStyle: style,
    };
  }

  const key = `border${getTarget($target) || ""}`;

  if (!$value) {
    return {
      [`${key}Width`]: defaultBorderWidthMap.DEFAULT,
    };
  }

  const width = maybe(defaultBorderWidthMap, $value);
  if (width !== undefined) {
    return {
      [`${key}Width`]: width,
    };
  }

  const colorMap = config?.colorMap ?? defaultColorMap;

  const color = getColor(colorMap)($value as Color);
  if (color !== undefined) {
    return {
      [`${key}Color`]: color,
    };
  }

  throw invalidValue();
};
