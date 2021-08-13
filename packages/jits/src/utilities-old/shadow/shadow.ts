import { Parse } from "../parse";

export type Utility = never;

export const ops = ["shadow"] as const;

export const parse: Parse = ({ ast }) => {
  console.warn(`not implemented, ${ast.__utility}`);
  return {};
};
