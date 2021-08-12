import * as React from "react";
import { Theme } from "./theme";
import { JitsContext } from "./jits-context";

type Props = React.PropsWithChildren<Partial<Theme>>;

export type { Props as ThemeProviderProps };

export function ThemeProvider(props: Props) {
  const { mode, colors, ...forward } = props;
  const parent = React.useContext(JitsContext);
  const theme = React.useMemo(
    () => Object.assign({}, parent, mode && { mode }, colors && { colors }),
    [parent, mode, colors]
  );
  return <ThemeContext.Provider value={theme} {...forward} />;
}
