import { ColorScale } from "./color";
import * as Maps from "../config/maps";

export interface Options<
  E extends readonly string[] = readonly string[],
  V extends readonly string[] = readonly string[]
> {
  envs: E;
  states: V;
  colors: {
    transparent: string;
    black: string;
    white: string;
    gray: Record<ColorScale, string>;
    red: Record<ColorScale, string>;
    yellow: Record<ColorScale, string>;
    green: Record<ColorScale, string>;
    blue: Record<ColorScale, string>;
    indigo: Record<ColorScale, string>;
    purple: Record<ColorScale, string>;
    pink: Record<ColorScale, string>;
  };
  fonts: {
    sans: string;
    serif: string;
    mono: string;
  };
  maps: {
    spacing: typeof Maps.SpacingMap;
  };
}
