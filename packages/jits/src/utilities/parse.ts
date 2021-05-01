import { Config } from "../jits";
import { AST } from "../ast/get-ast";

export interface Parse {
  (context: {
    ast: AST;
    config?: Config;
    invalidOp: () => void;
    invalidValue: () => void;
    requiresValue: () => void;
  }): Record<string, any>;
}
