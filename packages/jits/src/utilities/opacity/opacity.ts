import { Parse } from "../parse";
import { maybe } from "../../types";
import { OpacityMap, defaultOpacityMap } from "./opacity-map";

export type Utility = `opacity-${keyof OpacityMap}`;

export const ops = ["opacity"] as const;

export const parse: Parse = (options, { requiresValue, invalidValue }) => (
  ast
) => {
  const { value: $value } = ast;

  if (!$value) {
    throw requiresValue();
  }

  const opacity = maybe(defaultOpacityMap, $value);
  if (opacity !== undefined) {
    return {
      opacity,
    };
  }

  throw invalidValue();
};
