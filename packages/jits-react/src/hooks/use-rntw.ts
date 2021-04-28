import React from "react";
import { Style } from "../types";
import { rntw, RNTWRoot, StyleProp, VariantProp } from "../rntw";
import { useTheme } from "./use-theme";
import { getMergedStyleProp } from "../get-merged-style-prop";
import { getMergedVariant } from "../get-merged-variant";

type UseRNTWReturn = Partial<RNTWRoot> & { raw?: RNTWRoot };

export function useRNTW<S extends {} = Style>(
  style: StyleProp<S> | undefined,
  deps: any[] = []
): UseRNTWReturn {
  const theme = useTheme();
  return React.useMemo(() => {
    if (!style) {
      return {};
    }

    const styles = [];
    const tokens = [];

    if (Array.isArray(style)) {
      style.forEach((item) => {
        if (typeof item === "string" || Array.isArray(item)) {
          tokens.push(item);
        } else {
          styles.push(styles);
        }
      });
    }

    const raw = rntw(theme, tokens);

    return raw;
  }, deps);

  const overrideStyle: S = {};

  // const node = getMergedVariant(root, variant === "none" ? undefined : variant);
  const mergedStyle = getMergedStyleProp(node.view, styleProp || undefined);
}
