import { Style, Parser, Utility, UtilityArgs } from "../types";
import { argsMatch } from "./args-match";
import { argsPipe } from "./args-pipe";

interface Options {
  /**
   * Utilities to use when parsing inputs.
   */

  utilities?: Utility[];

  /**
   * See Parser.onUnknown.
   *
   * Defaults to "warn".
   */

  onUnknown?: Parser["onUnknown"];
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
  const argsUtilities = new Map<number, Map<Utility, UtilityArgs>>();
  for (const utility of utilities) {
    // Unify utility args schema into
    const argsSet = Array.isArray(utility.args)
      ? new Set([utility.args])
      : utility.args;

    // Add utility to potentially many argsCount sets.
    for (const args of argsSet.values()) {
      const argsCount = args.length;
      const argsCountSet = argsUtilities.get(argsCount) ?? new Map();

      // Enforce that utility must not have multiple args defs of same length.
      if (argsCountSet.has(utility))
        throw new TypeError("Utility cannot have multiple args of same size.");

      argsCountSet.set(utility, args);
      argsUtilities.set(argsCount, argsCountSet);
    }
  }

  const parser: Parser = {
    cache: new Map(),
    onUnknown,
    parse(input) {
      const { cache, onUnknown } = this;

      // Attempt to use cached result.
      if (cache.has(input)) return cache.get(input);

      // Split input into args by "-".
      const args = input.split("-");

      // Get utilities sub-group based on number of args.
      const argsCount = args.length;
      const utilities = argsUtilities.get(argsCount) ?? [];

      // Attempt to find a utility that matches input args.
      for (const [utility, utilityArgs] of utilities) {
        const match = argsMatch(utilityArgs, args);
        // Skip, if utility does not match.
        if (!match) continue;
        // Otherwise, return result of matching utility.
        const { build } = utility;
        // `build` can be a function, or static result object.
        const result =
          typeof build === "function"
            ? build(argsPipe(utilityArgs, args))
            : build;
        // cache result
        cache.set(input, result);

        return result;
      }

      // Default to `undefined` for unhandled input.
      let result: Style | undefined = undefined;

      // Error handling for unhandled input.
      if (typeof onUnknown === "string") {
        if (onUnknown === "ignore") {
          // Do nothing.
        } else if (onUnknown === "warn" || onUnknown === "error") {
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
