import { Parse } from "../parse";
import { maybe } from "../../types";
import { Axis, getTarget } from "../../target";
import { SpacingMap, defaultSpacingMap } from "../spacing-map";

export type Utility =
  | `${"" | "-"}${
      | "top"
      | "right"
      | "bottom"
      | "left"
      | "start"
      | "end"}-${keyof SpacingMap}`
  | `${"" | "-"}${"inset"}${"" | `-${Axis}`}-${keyof SpacingMap}`;

export const ops = [
  "top",
  "right",
  "bottom",
  "left",
  "start",
  "end",
  "inset",
] as const;

export const parse: Parse = ({ ast, config, requiresValue, invalidValue }) => {
  const { op, target: $target, value: $value } = ast;

  if (!$value) {
    throw requiresValue();
  }

  const spacingMap = config?.spacingMap ?? defaultSpacingMap;

  const sign = $value.startsWith("-") ? -1 : 1;
  const valueRaw = maybe(spacingMap, $value.replace("-", ""));

  if (valueRaw === undefined) {
    throw invalidValue();
  }

  const value = valueRaw * sign;

  if (op === "inset") {
    if (!$target) {
      return {
        top: value,
        right: value,
        bottom: value,
        left: value,
      };
    } else if ($target === "x") {
      return {
        right: value,
        left: value,
      };
    } else if ($target === "y") {
      return {
        top: value,
        bottom: value,
      };
    }
    throw invalidValue();
  }

  const key = `${op}${getTarget($target) || ""}`;

  return {
    [key]: value,
  };
};
