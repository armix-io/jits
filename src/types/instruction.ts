import { Op } from "./utilities";
import { StateVariant, ContextVariant } from "./variants";

export type Instruction = `${"" | `${ContextVariant}:`}${
  | ""
  | `${StateVariant}:`}${Op}`;
