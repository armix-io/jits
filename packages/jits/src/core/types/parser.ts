import { Style } from "./style";

export interface Parser {
  /**
   * Cache results of evaluated inputs.
   */

  cache: Map<string, Style | undefined>;

  /**
   * Transforms input string into Style object.
   * @param input Input string to be evaluated.
   * @returns Style object, or `undefined` if no match or invalid input.
   */

  parse(input: string): Style | undefined;

  /**
   * Define behaviour when encountering an unknown input.
   *
   * If "ignore", will fail silently.
   * If "warn", will output a message with `console.warn`.
   * If "error", will output a message with `console.error`.
   * If "throw", will throw a TypeError.
   * If a function, accepts the failing input string, and may return `undefined`
   * or a Style object.
   */

  onUnknown:
    | "ignore"
    | "warn"
    | "error"
    | "throw"
    | ((input: string) => Style | undefined);
}
