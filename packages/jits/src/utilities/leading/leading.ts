import { Parse } from "../parse";
import { maybe } from "../../types";
import { LeadingMap, defaultLeadingMap } from "./leading-map";

export type Utility = `leading-${keyof LeadingMap}`;

export const ops = ["leading"] as const;

export const parse: Parse = (options, { requiresValue, invalidValue }) => (
  ast
) => {
  const { value: $value } = ast;

  if (!$value) {
    throw requiresValue();
  }

  const lineHeight = maybe(defaultLeadingMap, $value);
  if (lineHeight !== undefined) {
    return { lineHeight };
  }

  throw invalidValue();
};
