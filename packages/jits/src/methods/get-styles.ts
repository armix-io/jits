import { Theme } from "./theme";
import { Token, StateVariant, Style } from "./types";
import { getAst } from "./get-ast";
import { getAstStyle } from "./get-ast-style";
import { getMergedVariant } from "./get-merged-variant";

type StyleVariant = "DEFAULT" | StateVariant;

export class StyleObject {
  #variant: StyleVariant;
  #styles: Map<StyleVariant, Style & { overrides: Style }>;

  constructor(theme: Theme, tokens: Token[]) {
    const { mode } = theme;

    const isThemeDark = mode === "dark";

    const styles = new Map<StyleVariant, Style & { overrides: Style }>();

    const asts = tokens.map(getAst);

    asts.forEach((ast) => {
      const states = ast.states as StyleVariant[];

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

    this.#variant = "DEFAULT";
    this.#styles = styles;
  }

  variant(variant: StyleVariant) {
    this.#variant = variant;
    return this;
  }

  as(variant: StyleVariant): Style {
    return this.#styles.get(variant) || {};
  }

  get view(): Style {
    return this.as(this.#variant);
  }

  get text(): Style {
    return this.as(this.#variant);
  }

  get image(): Style {
    return this.as(this.#variant);
  }
}
