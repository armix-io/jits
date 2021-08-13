import { Style, Parser, Utility } from "../types";
import { argsMatch } from "./args-match";
import { argsPipe } from "./args-pipe";

interface Options {
  /**
   * Utilities to use when parsing inputs.
   */

  utilities?: Utility[];

  /**
   * Define behaviour when encountering an unknown input.
   *
   * Defaults to "warn".
   *
   * If "warn", will output a message with `console.warn`.
   * If "error", will output a message with `console.error`.
   * If "throw", will throw a TypeError.
   * If a function, accepts the failing input string, and may return `undefined`
   * or a Style object.
   */

  onUnknown?:
    | "warn"
    | "error"
    | "throw"
    | ((input: string) => Style | undefined);
}

export type { Options as CreateParseOptions };

/**
 * Creates a new Parser object to parse inputs.
 *
 * @param options Options to configure Parser behaviour.
 * @returns New Parser object.
 */

export const createParser = (options: Options = {}): Parser => {
  const { utilities = [], onUnknown = "warn" } = options;

  // Split utilities into groups by number of arguments.
  const argsUtilities = new Map<number, Utility[]>();
  for (const utility of utilities) {
    const argsCount = utility.args.length;

    const prev = argsUtilities.get(argsCount) ?? [];
    const next = [...prev, utility];

    argsUtilities.set(argsCount, next);
  }

  // Cache results from duplicate calls.
  const cache: Parser["cache"] = new Map();

  const parser: Parser = {
    cache,
    parse(input) {
      // Attempt to use cached result.
      if (cache.has(input)) return cache.get(input);

      // Split input into args by "-".
      const args = input.split("-");

      // Get utilities sub-group based on number of args.
      const argsCount = args.length;
      const utilities = argsUtilities.get(argsCount) ?? [];

      // Attempt to find a utility that matches input args.
      for (const utility of utilities) {
        const match = argsMatch(utility.args, args);
        // Skip, if utility does not match.
        if (!match) continue;
        // Otherwise, return result of matching utility.
        const { build } = utility;
        // `build` can be a function, or static result object.
        const result =
          typeof build === "function"
            ? build(argsPipe(utility.args, args))
            : build;
        // cache result
        cache.set(input, result);

        return result;
      }

      // Default to `undefined` for unhandled input.
      let result: Style | undefined = undefined;

      // Error handling for unhandled input.
      if (typeof onUnknown === "string") {
        if (onUnknown === "warn" || onUnknown === "error") {
          console[onUnknown](`Unable to parse input "${input}".`);
        } else if (onUnknown === "throw") {
          throw new TypeError(`Unable to parse input "${input}".`);
        } else {
          throw new TypeError(`Invalid "onUnknown" value "${onUnknown}".`);
        }
      } else if (typeof onUnknown === "function") {
        // Substitute onUnknown result to return/cache.
        result = onUnknown(input);
      }

      // cache result
      cache.set(input, result);

      return result;
    },
  };

  return parser;
};
