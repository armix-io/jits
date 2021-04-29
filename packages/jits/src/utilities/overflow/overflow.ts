import { Parse } from "../parse";
import { maybe } from "../../types";
import { OverflowMap, defaultOverflowMap } from "./overflow-map";

export type Utility = `${"overflow"}-${keyof OverflowMap}`;

export const ops = ["overflow"] as const;

export const parse: Parse = (options, { requiresValue, invalidValue }) => (
  ast
) => {
  const { value: $value } = ast;

  if (!$value) {
    throw requiresValue();
  }

  const overflow = maybe(defaultOverflowMap, $value);
  if (overflow !== undefined) {
    return { overflow };
  }

  throw invalidValue();
};
