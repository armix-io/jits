import { Parse } from "../parse";
import { Color, getColor, defaultColorMap } from "../../color";

export type Utility = `tint-${Color}`;

export const ops = ["tint"] as const;

export const parse: Parse = ({ ast, config, requiresValue, invalidValue }) => {
  const { value: $value } = ast;

  if (!$value) {
    throw requiresValue();
  }

  const colorMap = config?.colorMap ?? defaultColorMap;

  const tintColor = getColor(colorMap)($value as Color);
  if (tintColor !== undefined) {
    return { tintColor };
  }

  throw invalidValue();
};
