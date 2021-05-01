import { Parse } from "../parse";
import { maybe } from "../../types";
import {
  JustifyContentMap,
  defaultJustifyContentMap,
} from "./justify-content-map";

export type Utility = `justify-${keyof JustifyContentMap}`;

export const ops = ["justify"] as const;

export const parse: Parse = ({ ast, requiresValue, invalidValue }) => {
  const { value: $value } = ast;

  if (!$value) {
    throw requiresValue();
  }

  const justifyContent = maybe(defaultJustifyContentMap, $value);
  if (justifyContent !== undefined) {
    return { justifyContent };
  }

  throw invalidValue();
};
