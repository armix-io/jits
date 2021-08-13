import { Parse } from "../parse";
import { maybe } from "../../types";
import { ZIndexMap, defaultZIndexMap } from "./z-index-map";

export type Utility = `z-${keyof ZIndexMap}`;

export const ops = ["z"] as const;

export const parse: Parse = ({ ast, requiresValue, invalidValue }) => {
  const { value: $value } = ast;

  if (!$value) {
    throw requiresValue();
  }

  const value = maybe(defaultZIndexMap, $value);
  if (value !== undefined) {
    return {
      zIndex: value,
    };
  }

  throw invalidValue();
};
