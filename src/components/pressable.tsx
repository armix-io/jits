import * as React from "react";
import * as RN from "react-native";
import { RNTWStyle, RNTWStyleNode, WithRNTWProps } from "../rntw";
import { useRNTW } from "../hooks/use-rntw";

type PressableStateWithStyles = RN.PressableStateCallbackType & {
  style: RNTWStyle;
  active: RNTWStyleNode;
};

type Props = WithRNTWProps<
  Omit<RN.PressableProps, "children" | "style"> & {
    children?:
      | React.ReactNode
      | ((stateWithStyles: PressableStateWithStyles) => React.ReactNode);
    style?:
      | RN.StyleProp<RN.ViewStyle>
      | ((
          stateWithStyles: PressableStateWithStyles
        ) => RN.StyleProp<RN.ViewStyle>);
    autoStyle?: boolean;
  }
>;

export type { Props as PressableProps };

export function Pressable(props: Props) {
  const {
    className,
    children,
    style: propStyle,
    autoStyle = true,
    ...forward
  } = props;
  const rntwStyle = useRNTW(className);
  const stateMergeProps = { style: rntwStyle, active: rntwStyle.active || {} };
  return (
    <RN.Pressable
      {...forward}
      style={(state) =>
        Object.assign(
          {},
          autoStyle ? rntwStyle : undefined,
          autoStyle && state.pressed ? stateMergeProps.active : undefined,
          typeof propStyle === "function"
            ? propStyle({ ...state, ...stateMergeProps })
            : propStyle
        )
      }
    >
      {(state) =>
        typeof children === "function"
          ? children({ ...state, ...stateMergeProps })
          : children
      }
    </RN.Pressable>
  );
}
