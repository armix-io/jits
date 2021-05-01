import { ColorMap, defaultColorMap } from "../color";
import {
  FontMap,
  defaultFontMap,
  FontSizeMap,
  defaultFontSizeMap,
  SpacingMap,
  defaultSpacingMap,
  defaultTrackingMap,
  defaultLeadingMap,
  defaultBorderRadiusMap,
  TrackingMap,
  LeadingMap,
  BorderRadiusMap,
} from "../utilities";

export interface Config<
  E extends readonly string[] = readonly string[],
  V extends readonly string[] = readonly string[]
> {
  envs: E;
  states: V;
  colorMap: ColorMap;
  fontMap: FontMap;
  fontSizeMap: FontSizeMap;
  spacingMap: SpacingMap;
  trackingMap: TrackingMap;
  leadingMap: LeadingMap;
  borderRadiusMap: BorderRadiusMap;
}

export const defaultConfig: Config = {
  envs: ["dark"] as const,
  states: ["active"] as const,
  colorMap: defaultColorMap,
  fontMap: defaultFontMap,
  fontSizeMap: defaultFontSizeMap,
  spacingMap: defaultSpacingMap,
  trackingMap: defaultTrackingMap,
  leadingMap: defaultLeadingMap,
  borderRadiusMap: defaultBorderRadiusMap,
};

// export type StateVariant =
//   | "active"
//   | "focus"
//   | "disabled"
//   | "checked"
//   | "first"
//   | "last"
//   | "odd"
//   | "even";

// export type ContextVariant = "dark" | "ios" | "android";
