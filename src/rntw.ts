import { Theme } from "./theme";
import { Style, Instruction as Token, StyleType, StateVariant } from "./types";
import { getAst } from "./get-ast";
import { getAstStyle } from "./get-ast-style";
import { getTypeGroups } from "./get-type-groups";

export type RNTWNode = Record<"style" | StyleType, Style>;
export type RNTWRoot = RNTWNode & Partial<Record<StateVariant, RNTWNode>>;

export type StyleProp<S extends {} = Style> = S | (Token | S)[];
export type VariantProp = StateVariant | "none";

export type WithRNTWProps<P, S extends {} = Style> = Omit<
  P,
  "style" | "variant"
> & {
  style?: StyleProp<S>;
  variant?: VariantProp;
};

export const rntw = (theme: Theme, tokens: Token[]) => {
  const { mode } = theme;

  const isThemeDark = mode === "dark";

  type StyleStates = "DEFAULT" | StateVariant;

  const styles = new Map<StyleStates, Style & { overrides: Style }>();

  const asts = tokens.map(getAst);

  asts.forEach((ast) => {
    const states = ast.states as StyleStates[];

    // if root, because no state decorators, add "DEFAULT" state
    if (!states.length) {
      states.push("DEFAULT");
    }

    const astDark = ast.contexts.includes("dark");
    const astOverride = astDark;

    // if ast requires dark context, but theme isn't dark, skip
    if (astDark && !isThemeDark) {
      return;
    }

    states.forEach((state) => {
      const style = styles.get(state) || { overrides: {} };
      if (astOverride) {
        Object.assign(style.overrides, getAstStyle(theme, ast));
      } else {
        Object.assign(style, getAstStyle(theme, ast));
      }
      styles.set(state, style);
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
