import * as React from "react";
import * as RN from "react-native";
import { StateVariant, Style } from "../types";
import { RNTWNode, RNTWRoot, WithRNTWProps } from "../rntw";
import { useRNTW } from "../hooks/use-rntw";
import { getMergedVariant } from "../get-merged-variant";

type AutoVariant = StateVariant | "auto" | "none";

const getVariant = (
  variant:
    | AutoVariant
    | ((state: RN.PressableStateCallbackType) => AutoVariant),
  state: RN.PressableStateCallbackType
) => {
  const _v = typeof variant === "function" ? variant(state) : variant;
  const v =
    _v === "none"
      ? "none"
      : _v === "auto"
      ? state.pressed
        ? "active"
        : undefined
      : _v;
  return v;
};

type Props = Omit<
  WithRNTWProps<Omit<RN.PressableProps, "children" | "style">>,
  "variant"
> & {
  variant?:
    | AutoVariant
    | ((state: RN.PressableStateCallbackType) => AutoVariant);
  style?:
    | RN.StyleProp<RN.ViewStyle>
    | ((
        ss: RN.PressableStateCallbackType & { style: Style; root: RNTWRoot }
      ) => RN.StyleProp<RN.ViewStyle>);
  children?:
    | React.ReactNode
    | ((
        ss: RN.PressableStateCallbackType & RNTWNode & { root: RNTWRoot }
      ) => React.ReactNode);
};

export type { Props as PressableProps };

export function Pressable(props: Props) {
  const {
    className,
    variant: _variant = "auto",
    style: styleProp,
    children,
    ...forward
  } = props;
  const rntw = useRNTW();
  const root = rntw(className);
  return (
    <RN.Pressable
      {...forward}
      style={(state) => {
        const variant = getVariant(_variant, state);
        const node =
          variant !== "none"
            ? getMergedVariant(root, variant)
            : ({} as RNTWNode);
        return Object.assign(
          {},
          node.view,
          typeof styleProp === "function"
            ? styleProp({ ...state, style: node.view, root })
            : styleProp
        );
      }}
    >
      {(state) => {
        const variant = getVariant(_variant, state);
        const node =
          variant !== "none"
            ? getMergedVariant(root, variant)
            : ({} as RNTWNode);
        return typeof children === "function"
          ? children({ ...state, ...node, root })
          : children;
      }}
    </RN.Pressable>
  );
}
