import { Options } from "../types";
import { AST } from "../methods/get-ast";

export interface Parse {
  (
    options: Options,
    context: {
      requiresValue: () => void;
      invalidValue: () => void;
      invalidOp: () => void;
    }
  ): (ast: AST) => Record<string, any>;
}
