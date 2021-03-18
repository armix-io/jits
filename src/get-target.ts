import { Target } from "./types";

export const getTarget = (target: string | undefined) =>
  target ? Target[target as keyof typeof Target] : undefined;
