import { Parse } from "../parse";
import { maybe } from "../../types";
import { AlignItemsMap, defaultAlignItemsMap } from "./align-items-map";

export type Utility = `items-${keyof AlignItemsMap}`;

export const ops = ["items"] as const;

export const parse: Parse = ({ ast, requiresValue, invalidValue }) => {
  const { value: $value } = ast;

  if (!$value) {
    throw requiresValue();
  }

  const alignItems = maybe(defaultAlignItemsMap, $value);
  if (alignItems !== undefined) {
    return { alignItems };
  }

  throw invalidValue();
};
