import { Parse } from "../parse";
import { maybe } from "../../types";
import { Side, Corner, getTarget } from "../../target";
import { BorderRadiusMap, defaultBorderRadiusMap } from "./border-radius-map";

export type Utility = `rounded${
  | ""
  | `${"" | `-${Side | Corner}`}${
      | ""
      | `-${Exclude<keyof BorderRadiusMap, "DEFAULT">}`}`}`;

export const ops = ["rounded"] as const;

export const parse: Parse = ({ ast, config }) => {
  const { target: $target, value: $value } = ast;

  const borderRadiusMap = config?.borderRadiusMap ?? defaultBorderRadiusMap;

  const value = maybe(borderRadiusMap, $value) ?? borderRadiusMap.DEFAULT;

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
