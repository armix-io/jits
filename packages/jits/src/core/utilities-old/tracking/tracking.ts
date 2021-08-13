import { Parse } from "../parse";
import { maybe } from "../../types";
import { TrackingMap, defaultTrackingMap } from "./tracking-map";

export type Utility = `tracking-${keyof TrackingMap}`;

export const ops = ["tracking"] as const;

export const parse: Parse = ({ ast, config, requiresValue, invalidValue }) => {
  const { value: $value } = ast;

  if (!$value) {
    throw requiresValue();
  }

  const trackingMap = config?.trackingMap ?? defaultTrackingMap;

  const letterSpacing = maybe(trackingMap, $value);
  if (letterSpacing !== undefined) {
    return { letterSpacing };
  }

  throw invalidValue();
};
