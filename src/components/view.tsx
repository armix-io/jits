import * as React from "react";
import * as RN from "react-native";
import { WithRNTWProps } from "../rntw";
import { useRNTW } from "../hooks/use-rntw";

export function View(props: WithRNTWProps<RN.View["props"]>) {
  const { className, ...forward } = props;
  const style = useRNTW(className, props.style);
  return <RN.View {...forward} style={style} />;
}
