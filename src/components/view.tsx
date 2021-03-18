import * as React from "react";
import * as RN from "react-native";
import { WithRNTWProps } from "../rntw";
import { useRNTW } from "../hooks/use-rntw";
import { getMergedStyleProp } from "../get-merged-style-prop";
import { getMergedVariant } from "../get-merged-variant";

type Props = WithRNTWProps<RN.View["props"]>;

export type { Props as ViewProps };

export function View(props: Props) {
  const { className, variant, style: styleProp, ...forward } = props;
  const rntw = useRNTW();
  const root = rntw(className);
  const node = getMergedVariant(root, variant === "none" ? undefined : variant);
  const style = getMergedStyleProp(node.view, styleProp || undefined);
  return <RN.View {...forward} style={style} />;
}
