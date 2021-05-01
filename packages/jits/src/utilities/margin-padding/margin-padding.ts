import { Parse } from "../parse";
import { maybe } from "../../types";
import { Side, Axis, getTarget } from "../../target";
import { SpacingMap, defaultSpacingMap } from "../spacing-map";

export type Utility = `${"" | "-"}${"m" | "p"}${
  | ""
  | `-${Axis | Side}`}-${keyof SpacingMap}`;

export const ops = ["m", "p"] as const;

export const parse: Parse = ({ ast, config, requiresValue, invalidValue }) => {
  const { op, target: $target, value: $value } = ast;

  if (!$value) {
    throw requiresValue();
  }

  const key = `${op === "m" ? "margin" : "padding"}${getTarget($target) || ""}`;

  const spacingMap = config?.spacingMap ?? defaultSpacingMap;

  const sign = $value.startsWith("-") ? -1 : 1;
  const value = maybe(spacingMap, $value.replace("-", ""));
  if (value !== undefined) {
    return {
      [key]: value * sign,
    };
  }

  throw invalidValue();
};
