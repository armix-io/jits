import React from "react";
import * as RN from "react-native";
import { ClassName } from "../types";
import { RNTWStyle } from "../rntw";
import { useRNTW } from "../hooks/use-rntw";

type WithRNTWProps<P> = P & { className?: ClassName | ClassName[] };

export function View(props: WithRNTWProps<RN.View["props"]>) {
  const { className, ...forward } = props;
  const style = useRNTW(className, props.style);
  return <RN.View {...forward} style={style} />;
}

export function Text(props: WithRNTWProps<RN.Text["props"]>) {
  const { className, ...forward } = props;
  const style = useRNTW(className, props.style);
  return <RN.Text {...forward} style={style} />;
}

export function Pressable(
  props: WithRNTWProps<
    Omit<RN.PressableProps, "children" | "style"> & {
      children?:
        | React.ReactNode
        | ((
            style: RNTWStyle,
            props: RN.PressableStateCallbackType
          ) => React.ReactNode);
      style?:
        | RN.StyleProp<RN.ViewStyle>
        | ((
            style: RNTWStyle,
            state: RN.PressableStateCallbackType
          ) => RN.StyleProp<RN.ViewStyle>);
    }
  >
) {
  const { className, children, style: propStyle, ...forward } = props;
  const rntwStyle = useRNTW(className);
  return (
    <RN.Pressable
      {...forward}
      style={(state) =>
        typeof propStyle === "function"
          ? propStyle(rntwStyle, state)
          : propStyle
      }
    >
      {(state) =>
        typeof children === "function" ? children(rntwStyle, state) : children
      }
    </RN.Pressable>
  );
}
