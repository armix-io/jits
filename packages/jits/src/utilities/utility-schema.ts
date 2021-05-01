import { Parse } from "./parse";

export interface UtilitySchema {
  ops: readonly string[];
  parse: Parse;
  test?: (op: string) => boolean;
}
