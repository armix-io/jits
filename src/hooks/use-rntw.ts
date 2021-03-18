import { rntw } from "../rntw";
import { ClassName } from "../types";
import { useTheme } from "./use-theme";

export function useRNTW() {
  const theme = useTheme();
  return (classNames: ClassName[] = []): ReturnType<typeof rntw> => {
    return rntw(theme, classNames);
  };
}
