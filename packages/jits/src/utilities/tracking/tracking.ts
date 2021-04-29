import { Parse } from "../parse";
import { maybe } from "../../types";
import { TrackingMap, defaultTrackingMap } from "./tracking-map";

export type Utility = `tracking-${keyof TrackingMap}`;

export const ops = ["tracking"] as const;

export const parse: Parse = (options, { requiresValue, invalidValue }) => (
  ast
) => {
  const { value: $value } = ast;

  if (!$value) {
    throw requiresValue();
  }

  const letterSpacing = maybe(defaultTrackingMap, $value);
  if (letterSpacing !== undefined) {
    return { letterSpacing };
  }

  throw invalidValue();
};
