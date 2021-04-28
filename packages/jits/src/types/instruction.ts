import { Op } from "./utilities";
import { StateVariant, ContextVariant } from "./variants";

export type Instruction = Op | (ContextVariant | StateVariant | Op)[];

export type Token = Instruction;
