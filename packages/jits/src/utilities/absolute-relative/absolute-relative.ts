import { Parse } from "../parse";

export type Utility = "absolute" | "relative";

export const ops = ["absolute", "relative"] as const;

export const parse: Parse = () => (ast) => {
  const { op } = ast;

  return {
    position: op,
  };
};
