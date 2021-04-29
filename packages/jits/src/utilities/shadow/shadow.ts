import { Parse } from "../parse";

export type Utility = never;

export const ops = ["shadow"] as const;

export const parse: Parse = (options, { invalidOp }) => (ast) => {
  console.warn(`not implemented, ${ast.__function}`);
  throw invalidOp();
};
