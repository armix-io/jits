import { Parse } from "../parse";
import { maybe } from "../../types";
import { LeadingMap, defaultLeadingMap } from "./leading-map";

export type Utility = `leading-${keyof LeadingMap}`;

export const ops = ["leading"] as const;

export const parse: Parse = ({ ast, config, requiresValue, invalidValue }) => {
  const { value: $value } = ast;

  if (!$value) {
    throw requiresValue();
  }

  const leadingMap = config?.leadingMap ?? defaultLeadingMap;

  const lineHeight = maybe(leadingMap, $value);
  if (lineHeight !== undefined) {
    return { lineHeight };
  }

  throw invalidValue();
};
