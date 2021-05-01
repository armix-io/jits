import { Parse } from "../parse";
import {
  TextTransformMap,
  defaultTextTransformMap,
} from "./text-transform-map";

export type Utility = keyof TextTransformMap;

export const ops = [
  "uppercase",
  "lowercase",
  "capitalize",
  "normal-case",
] as const;

export const parse: Parse = ({ ast }) => {
  const { op } = ast;

  return {
    textTransform: defaultTextTransformMap[op as typeof ops[number]],
  };
};
