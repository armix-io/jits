import { Parse } from "./parse";

export interface Utility {
  ops: readonly string[];
  parse: Parse;
  test?: (op: string) => boolean;
}
