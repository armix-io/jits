import { Parse } from "../parse";
import { Color, maybe, Side } from "../../types";
import { BorderStyleMap, defaultBorderStyleMap } from "./border-style-map";
import { BorderWidthMap, defaultBorderWidthMap } from "./border-width-map";
import { getColor } from "../../methods/get-color";
import { getTarget } from "../../methods/get-target";

export type Utility = `border${
  | ""
  | `${"" | `-${Side}`}${
      | ""
      | `-${keyof BorderStyleMap}`
      | `-${Exclude<keyof BorderWidthMap, "DEFAULT">}`
      | `-${Color}`}`}`;

export const ops = ["opacity"] as const;

export const parse: Parse = (options, { requiresValue, invalidValue }) => (
  ast
) => {
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

  const color = getColor(options)($value as Color);
  if (color !== undefined) {
    return {
      [`${key}Color`]: color,
    };
  }

  throw invalidValue();
};
