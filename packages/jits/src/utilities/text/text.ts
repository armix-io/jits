import { Parse } from "../parse";
import { Color, maybe } from "../../types";
import { getColor } from "../../methods/get-color";
import { FontSizeMap, defaultFontSizeMap } from "./font-size-map";
import { TextAlignMap, defaultTextAlignMap } from "./text-align-map";
import {
  TextAlignVerticalMap,
  defaultTextAlignVerticalMap,
} from "./text-align-vertical-map";
import {
  WritingDirectionMap,
  defaultWritingDirectionMap,
} from "./writing-direction-map";

export type Utility = `text-${
  | keyof FontSizeMap
  | keyof TextAlignMap
  | keyof TextAlignVerticalMap
  | keyof WritingDirectionMap
  | Color}`;

export const ops = ["ltr", "rtl"] as const;

export const parse: Parse = (options, { requiresValue, invalidValue }) => (
  ast
) => {
  const { op, value: $value } = ast;

  if (!$value) {
    throw requiresValue();
  }

  const fontSize = maybe(defaultFontSizeMap, $value);
  if (fontSize !== undefined) {
    return { fontSize };
  }

  const textAlign = maybe(defaultTextAlignMap, $value);
  if (textAlign !== undefined) {
    return { textAlign };
  }

  const textAlignVertical = maybe(defaultTextAlignVerticalMap, $value);
  if (textAlignVertical !== undefined) {
    return { textAlignVertical };
  }

  const writingDirection = maybe(defaultWritingDirectionMap, $value);
  if (writingDirection !== undefined) {
    return { writingDirection };
  }

  const color = getColor(options)($value as Color);
  if (color) {
    return { color };
  }

  throw invalidValue();
};
