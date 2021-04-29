import { Parse } from "../parse";
import { Corner, maybe, Side } from "../../types";
import { BorderRadiusMap, defaultBorderRadiusMap } from "./border-radius-map";
import { getTarget } from "../../methods/get-target";

export type Utility = `rounded${
  | ""
  | `${"" | `-${Side | Corner}`}${
      | ""
      | `-${Exclude<keyof BorderRadiusMap, "DEFAULT">}`}`}`;

export const ops = ["opacity"] as const;

export const parse: Parse = () => (ast) => {
  const { target: $target, value: $value } = ast;

  const value =
    maybe(defaultBorderRadiusMap, $value) ?? defaultBorderRadiusMap.DEFAULT;

  if ($target === "l") {
    return {
      borderTopLeftRadius: value,
      borderBottomLeftRadius: value,
    };
  } else if ($target === "r") {
    return {
      borderTopRightRadius: value,
      borderBottomRightRadius: value,
    };
  } else if ($target === "t") {
    return {
      borderTopLeftRadius: value,
      borderTopRightRadius: value,
    };
  } else if ($target === "b") {
    return {
      borderBottomLeftRadius: value,
      borderBottomRightRadius: value,
    };
  }
  return {
    [`border${getTarget($target) || ""}Radius`]: value,
  };
};
