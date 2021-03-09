import { useColorScheme } from "react-native";
import { ThemeMode } from "../theme/theme";

/**
 * based on system appearance, will return `light` or `dark` for rntw.
 */
export function useThemeMode() {
  const colorScheme = useColorScheme();
  const themeMode: ThemeMode = colorScheme === "dark" ? "dark" : "light";
  return themeMode;
}
