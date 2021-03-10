import * as React from "react";
import * as RN from "react-native";
import { WithRNTWProps } from "../rntw";
import { useRNTW } from "../hooks/use-rntw";

export function Text(props: WithRNTWProps<RN.Text["props"]>) {
  const { className, ...forward } = props;
  const style = useRNTW(className, props.style);
  return <RN.Text {...forward} style={style} />;
}
