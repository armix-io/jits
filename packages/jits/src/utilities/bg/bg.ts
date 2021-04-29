import { Parse } from "../parse";
import { Color } from "../../types";
import { getColor } from "../../methods/get-color";

export type Utility = `${"bg"}-${Color}`;

export const ops = ["bg"] as const;

export const parse: Parse = (options, { requiresValue, invalidValue }) => (
  ast
) => {
  const { value: $value } = ast;

  if (!$value) {
    throw requiresValue();
  }

  const color = getColor(options)($value as Color);
  if (color !== undefined) {
    return {
      backgroundColor: color,
    };
  }

  throw invalidValue();
};
