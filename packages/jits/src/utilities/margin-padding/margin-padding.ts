import { Parse } from "../parse";
import { Axis, maybe, Side } from "../../types";
import { getTarget } from "../../methods/get-target";
import { SpacingMap, defaultSpacingMap } from "../spacing-map";

export type Utility = `${"" | "-"}${"m" | "p"}${
  | ""
  | `-${Axis | Side}`}-${keyof SpacingMap}`;

export const ops = ["m", "p"] as const;

export const parse: Parse = (options, { requiresValue, invalidValue }) => (
  ast
) => {
  const { op, target: $target, value: $value } = ast;

  if (!$value) {
    throw requiresValue();
  }

  const key = `${op === "m" ? "margin" : "padding"}${getTarget($target) || ""}`;

  const sign = $value.startsWith("-") ? -1 : 1;
  const value = maybe(defaultSpacingMap, $value.replace("-", ""));
  if (value !== undefined) {
    return {
      [key]: value * sign,
    };
  }

  throw invalidValue();
};
