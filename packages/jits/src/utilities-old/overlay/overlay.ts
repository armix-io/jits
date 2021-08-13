import { Parse } from "../parse";
import { Color, getColor, defaultColorMap } from "../../color";

export type Utility = `overlay-${Color}`;

export const ops = ["overlay"] as const;

export const parse: Parse = ({ ast, config, requiresValue, invalidValue }) => {
  const { value: $value } = ast;

  if (!$value) {
    throw requiresValue();
  }

  const colorMap = config?.colorMap ?? defaultColorMap;

  const overlayColor = getColor(colorMap)($value as Color);
  if (overlayColor !== undefined) {
    return { overlayColor };
  }

  throw invalidValue();
};
