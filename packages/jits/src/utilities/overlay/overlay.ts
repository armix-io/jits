import { Parse } from "../parse";
import { Color } from "../../types";
import { getColor } from "../../methods/get-color";

export type Utility = `overlay-${Color}`;

export const ops = ["overlay"] as const;

export const parse: Parse = (options, { requiresValue, invalidValue }) => (
  ast
) => {
  const { value: $value } = ast;

  if (!$value) {
    throw requiresValue();
  }

  const overlayColor = getColor(options)($value as Color);
  if (overlayColor !== undefined) {
    return { overlayColor };
  }

  throw invalidValue();
};
