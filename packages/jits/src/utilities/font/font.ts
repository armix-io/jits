import { Parse } from "../parse";
import { maybe } from "../../types";
import { FontMap, defaultFontMap } from "./font-map";
import { FontWeightMap, defaultFontWeightMap } from "./font-weight-map";

export type Utility = `font-${keyof FontWeightMap | keyof FontMap}`;

export const ops = ["font"] as const;

export const parse: Parse = (options, { requiresValue, invalidValue }) => (
  ast
) => {
  const { value: $value } = ast;

  if (!$value) {
    throw requiresValue();
  }

  const fontWeight = maybe(defaultFontWeightMap, $value);
  if (fontWeight !== undefined) {
    return { fontWeight };
  }

  const fontFamily = maybe(defaultFontMap, $value);
  if (fontFamily !== undefined) {
    return { fontFamily };
  }

  throw invalidValue();
};
