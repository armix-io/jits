import * as React from "react";
import * as RN from "react-native";
import { WithRNTWProps } from "../rntw";
import { useRNTW } from "../hooks/use-rntw";
import { getMergedStyleProp } from "../get-merged-style-prop";
import { getMergedVariant } from "../get-merged-variant";

type Props = WithRNTWProps<RN.Text["props"]>;

export type { Props as TextProps };

export function Text(props: Props) {
  const { className, variant, style: styleProp, ...forward } = props;
  const rntw = useRNTW();
  const root = rntw(className);
  const node = getMergedVariant(root, variant === "none" ? undefined : variant);
  const style = getMergedStyleProp(node.text, styleProp || undefined);
  return <RN.Text {...forward} style={style} />;
}
