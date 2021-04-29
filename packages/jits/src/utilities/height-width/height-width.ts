import { Parse } from "../parse";
import { maybe } from "../../types";
import { SpacingMap, defaultSpacingMap } from "../spacing-map";

export type Utility = `${"h" | "w"}-${keyof SpacingMap}`;

export const ops = ["h", "w"] as const;

export const parse: Parse = (options, { requiresValue, invalidValue }) => (
  ast
) => {
  const { op, target: $target, value: $value } = ast;

  if (!$value) {
    throw requiresValue();
  }

  const key = op === "h" ? "height" : "width";

  const value = maybe(defaultSpacingMap, $value.replace("-", ""));
  if (value !== undefined) {
    return {
      [key]: value,
    };
  }

  throw invalidValue();
};
