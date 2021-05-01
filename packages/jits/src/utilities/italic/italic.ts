import { Parse } from "../parse";

export type Utility = "italic" | "non-italic";

export const ops = ["italic", "non-italic"] as const;

export const parse: Parse = ({ ast }) => {
  const { op } = ast;

  return {
    fontStyle: op === "italic" ? "italic" : "normal",
  };
};
