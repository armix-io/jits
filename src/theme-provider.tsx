import React from "react";
import { Theme } from "./theme";
import { ThemeContext } from "./theme-context";

type Props = React.PropsWithChildren<Partial<Theme>>;

export type { Props as ThemeProviderProps };

export function ThemeProvider(props: Props) {
  const { mode, colors, ...forward } = props;
  const parent = React.useContext(ThemeContext);
  const theme = React.useMemo(
    () => Object.assign({}, parent, mode && { mode }, colors && { colors }),
    [parent, mode, colors]
  );
  return <ThemeContext.Provider value={theme} {...forward} />;
}
