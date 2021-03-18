import { Theme } from "./theme";
import {
  Style,
  ClassName,
  StyleType,
  StateVariant,
  ContextVariant,
} from "./types";
import { parse } from "./parse";
import { getTypeGroups } from "./get-type-groups";

// with variants, return type of rntw

export type RNTWNode = Record<"style" | StyleType, Style>;
export type RNTWRoot = RNTWNode & Partial<Record<StateVariant, RNTWNode>>;

export type WithRNTWProps<P> = P & {
  className?: ClassName[];
  variant?: StateVariant | "none";
};

export const rntw = (theme: Theme, classNames: ClassName[]) => {
  const { mode } = theme;
  const isThemeDark = mode === "dark";

  const styles = new Map<
    "DEFAULT" | StateVariant,
    Style & { overrides: Style }
  >();

  classNames.forEach((className: ClassName) => {
    const parts = className.split(":");
    const _className = parts.pop() as ClassName;
    const variants = new Set(
      parts as ("DEFAULT" | StateVariant | ContextVariant)[]
    );

    const isDarkVariant = variants.delete("dark");
    // or || any other override variant
    const isOverrideVariant = isDarkVariant;

    if (!variants.size) variants.add("DEFAULT");

    variants.forEach((variant) => {
      if (variant === "dark") return;
      const style = styles.get(variant) || { overrides: {} };

      if (isOverrideVariant) {
        if (isDarkVariant && isThemeDark) {
          Object.assign(style.overrides, parse(theme, _className));
        }
      } else {
        Object.assign(style, parse(theme, _className));
      }

      styles.set(variant, style);
    });
  });

  const root: RNTWRoot = {
    style: {},
    view: {},
    text: {},
    image: {},
  };

  styles.forEach(({ overrides, ...props }, variant) => {
    const style = Object.assign(props, overrides);
    const types = getTypeGroups(style);
    if (variant === "DEFAULT") {
      Object.assign(root, { style, ...types });
    } else {
      Object.assign(root, { [variant]: { style, ...types } });
    }
  });

  return root;
};
