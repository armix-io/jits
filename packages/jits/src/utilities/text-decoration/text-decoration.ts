import { Parse } from "../parse";
import { maybe, Color } from "../../types";
import { getColor } from "../../methods/get-color";
import {
  TextDecorationLineMap,
  defaultTextDecorationLineMap,
} from "./text-decoration-line-map";
import {
  TextDecorationStyleMap,
  defaultTextDecorationStyleMap,
} from "./text-decoration-style-map";

export type Utility =
  | keyof TextDecorationLineMap
  | `underline-${keyof TextDecorationStyleMap | Color}`;

export const ops = ["underline", "line-through", "no-underline"] as const;

export const test = (op: any) => op.startsWith("underline") || ops.includes(op);

export const parse: Parse = (options, { requiresValue, invalidValue }) => (
  ast
) => {
  const { op, value: $value } = ast;

  if (op.startsWith("underline")) {
    if (!$value) {
      return { textDecorationLine: "underline" };
    }

    const textDecorationStyle = maybe(defaultTextDecorationStyleMap, $value);
    if (textDecorationStyle !== undefined) {
      return { textDecorationStyle };
    }

    const textDecorationColor = getColor(options)($value as Color);
    if (textDecorationColor !== undefined) {
      return { textDecorationColor };
    }

    throw invalidValue();
  }

  if (op === "line-through" || op === "no-underline") {
    return {
      textDecorationLine: defaultTextDecorationLineMap[op],
    };
  }
};
