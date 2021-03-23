import * as React from "react";
import * as RN from "react-native";
import { WithRNTWProps } from "../rntw";
import { useRNTW } from "../hooks/use-rntw";

type Props = WithRNTWProps<RN.View["props"], RN.ViewStyle>;

export type { Props as ViewProps };

export function View(props: Props) {
  const { style: styleProp, variant, ...forward } = props;
  const style = useRNTW<RN.ViewStyle>(styleProp);
  return <RN.View {...forward} style={style.view} />;
}
