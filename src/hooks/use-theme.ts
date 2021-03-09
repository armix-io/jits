import React from "react";
import { ThemeContext } from "../theme/theme-context";

export function useTheme() {
  return React.useContext(ThemeContext);
}
