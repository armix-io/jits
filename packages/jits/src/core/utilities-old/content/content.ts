import { Parse } from "../parse";
import { maybe } from "../../types";
import { AlignContentMap, defaultAlignContentMap } from "./align-content-map";

export type Utility = `${"content"}-${keyof AlignContentMap}`;

export const ops = ["content"] as const;

export const parse: Parse = ({ ast, requiresValue, invalidValue }) => {
  const { value: $value } = ast;

  if (!$value) {
    throw requiresValue();
  }

  const alignContent = maybe(defaultAlignContentMap, $value);
  if (alignContent !== undefined) {
    return { alignContent };
  }

  throw invalidValue();
};
