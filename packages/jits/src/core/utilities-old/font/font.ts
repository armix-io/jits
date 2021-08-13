import { Parse } from "../parse";
import { maybe } from "../../types";
import { FontMap, defaultFontMap } from "./font-map";
import { FontWeightMap, defaultFontWeightMap } from "./font-weight-map";

export type Utility = `font-${keyof FontWeightMap | keyof FontMap}`;

export const ops = ["font"] as const;

export const parse: Parse = ({ ast, config, requiresValue, invalidValue }) => {
  const { value: $value } = ast;

  if (!$value) {
    throw requiresValue();
  }

  const fontWeight = maybe(defaultFontWeightMap, $value);
  if (fontWeight !== undefined) {
    return { fontWeight };
  }

  const fontMap = config?.fontMap ?? defaultFontMap;

  const fontFamily = maybe(fontMap, $value);
  if (fontFamily !== undefined) {
    return { fontFamily };
  }

  throw invalidValue();
};
