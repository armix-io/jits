import { Parse } from "../parse";

export type Utility = "hidden";

export const ops = ["hidden"] as const;

export const parse: Parse = () => {
  return {
    display: "none",
  };
};
