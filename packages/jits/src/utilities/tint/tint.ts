import { Parse } from "../parse";
import { Color } from "../../types";
import { getColor } from "../../methods/get-color";

export type Utility = `tint-${Color}`;

export const ops = ["tint"] as const;

export const parse: Parse = (options, { requiresValue, invalidValue }) => (
  ast
) => {
  const { value: $value } = ast;

  if (!$value) {
    throw requiresValue();
  }

  const tintColor = getColor(options)($value as Color);
  if (tintColor !== undefined) {
    return { tintColor };
  }

  throw invalidValue();
};
