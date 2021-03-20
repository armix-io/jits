import { rntw } from "../rntw";
import { Instruction } from "../types";
import { useTheme } from "./use-theme";

export function useRNTW() {
  const theme = useTheme();
  return (instructions: Instruction[] = []): ReturnType<typeof rntw> => {
    return rntw(theme, instructions);
  };
}
