import { rntw } from "./rntw";
import { ClassName } from "./styles";
import { useTheme } from "./use-theme";

export function useRNTW(
  className: ClassName | ClassName[] | undefined,
  otherStyle?: any
) {
  const theme = useTheme();
  const tw = className
    ? rntw(theme, typeof className === "string" ? [className] : className)
    : undefined;
  const style = Object.assign(
    tw || {},
    ...(Array.isArray(otherStyle) ? otherStyle : [otherStyle])
  );
  return style;
}
