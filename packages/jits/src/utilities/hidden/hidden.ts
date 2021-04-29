import { Parse } from "../parse";

export type Utility = "hidden";

export const ops = ["overflow"] as const;

export const parse: Parse = () => () => {
  return {
    display: "none",
  };
};
