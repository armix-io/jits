import { Parse } from "../parse";

export type Utility = "ltr" | "rtl";

export const ops = ["ltr", "rtl"] as const;

export const parse: Parse = ({ ast }) => {
  const { op } = ast;

  return {
    direction: op,
  };
};
