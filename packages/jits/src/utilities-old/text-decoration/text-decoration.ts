import { Parse } from "../parse";
import { maybe } from "../../types";
import { Color, getColor, defaultColorMap } from "../../color";
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

export const parse: Parse = ({ ast, config, invalidValue, invalidOp }) => {
  const { op, value: $value } = ast;

  if (op.startsWith("underline")) {
    if (!$value) {
      return { textDecorationLine: "underline" };
    }

    const textDecorationStyle = maybe(defaultTextDecorationStyleMap, $value);
    if (textDecorationStyle !== undefined) {
      return { textDecorationStyle };
    }

    const colorMap = config?.colorMap ?? defaultColorMap;

    const textDecorationColor = getColor(colorMap)($value as Color);
    if (textDecorationColor !== undefined) {
      return { textDecorationColor };
    }

    throw invalidValue();
  }

  if (op === "line-through" || op === "no-underline") {
    return {
      textDecorationLine:
        defaultTextDecorationLineMap[op as keyof TextDecorationLineMap],
    };
  }

  throw invalidOp();
};
