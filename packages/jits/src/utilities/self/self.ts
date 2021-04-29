import { Parse } from "../parse";
import { maybe } from "../../types";
import { AlignSelfMap, defaultAlignSelfMap } from "./align-self-map";

export type Utility = `${"self"}-${keyof AlignSelfMap}`;

export const ops = ["self"] as const;

export const parse: Parse = (options, { requiresValue, invalidValue }) => (
  ast
) => {
  const { value: $value } = ast;

  if (!$value) {
    throw requiresValue();
  }

  const alignSelf = maybe(defaultAlignSelfMap, $value);
  if (alignSelf !== undefined) {
    return { alignSelf };
  }

  throw invalidValue();
};
