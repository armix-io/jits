import { rntw } from "../rntw";
import { ClassName } from "../types";
import { useTheme } from "./use-theme";

export function useRNTW(classNames: ClassName[] = [], otherStyle?: any) {
  const theme = useTheme();
  const tw = classNames ? rntw(theme, classNames) : undefined;
  const style = Object.assign(
    tw || {},
    ...(Array.isArray(otherStyle) ? otherStyle : [otherStyle])
  );
  return style;
}
