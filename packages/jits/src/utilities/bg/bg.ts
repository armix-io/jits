import { Parse } from "../parse";
import { Color, getColor, defaultColorMap } from "../../color";

export type Utility = `bg-${Color}`;

export const ops = ["bg"] as const;

export const parse: Parse = ({ ast, config, requiresValue, invalidValue }) => {
  const { value: $value } = ast;

  if (!$value) {
    throw requiresValue();
  }

  const colorMap = config?.colorMap ?? defaultColorMap;

  const color = getColor(colorMap)($value as Color);
  if (color !== undefined) {
    return {
      backgroundColor: color,
    };
  }

  throw invalidValue();
};
