import { Parser } from "./parser";
import { Utility } from "./utility";

interface Options {
  utilities?: Utility[];
}

export type { Options as CreateParseOptions };

export const createParser = (options: Options = {}): Parser => {
  const { utilities = [] } = options;

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

  /**
   * Checks if inputArgs is compatible with utilityArgs.
   * @param utilityArgs Args definition schema.
   * @param inputArgs Args to validate against utilityArgs as schema.
   * @returns `true` if match, `false` if no match or incompatible args inputs.
   */

  const argsMatch = (
    utilityArgs: Utility["args"],
    inputArgs: string[]
  ): boolean => {
    // Ensure both args inputs are equal length.
    if (utilityArgs.length !== inputArgs.length) return false;

    // Compare each arg of both args for equality.
    for (const argIndex in inputArgs) {
      const inputArg = inputArgs[argIndex];
      const utilityArg = utilityArgs[argIndex];
      if (typeof utilityArg === "string") {
        // Allow, "[]" to represent arbitrary values.
        if (utilityArg === "[]") continue;
        // Fail, if no match between args as strings.
        if (utilityArg !== inputArg) return false;
      } else if (Array.isArray(utilityArg)) {
        // Allow, "[]" to represent arbitrary values.
        if (utilityArg.includes("[]")) continue;
        // Fail, if inputArg is not in utilityArg options.
        if (!utilityArg.includes(inputArg)) return false;
      } else {
        // Fail, if invalid utilityArg.
        return false;
      }
    }

    // Success, if no fails.
    return true;
  };

  /**
   * Matches inner value of an arbitrary value string.
   * @example
   * "[foobar]" => "foobar"
   * "[100px]" => "100px"
   */

  const reArbitraryInnerValue = /^\[(\S*)\]$/;

  /**
   * Creates a new set of buildArgs based on inputArgs.
   * - converts "[value]" into "value" if utility arg specifies "[]" for arg.
   * @param utilityArgs Args definition schema.
   * @param inputArgs Args to used to produce modified args.
   * @returns Modified args for use with a utility's build function.
   */

  const argsPipe = (
    utilityArgs: Utility["args"],
    inputArgs: string[]
  ): string[] => {
    const buildArgs = inputArgs.map((inputArg, argIndex) => {
      const utilityArg = utilityArgs[argIndex];

      // Attempt to cleanly output inner value of arbitrary inputArg.
      if (
        utilityArg === "[]" ||
        (Array.isArray(utilityArg) && utilityArg.includes("[]"))
      ) {
        // Attempt to extract arbitrary inner value from inputArg.
        const match = inputArg.match(reArbitraryInnerValue);
        // Use new value, or fallback to original inputArg.
        return match ? match[1] : inputArg;
      }

      // Return default.
      return inputArg;
    });

    return buildArgs;
  };

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

      // `undefined` if unhandled input.
      const result = undefined;
      // cache result
      cache.set(input, result);

      return result;
    },
  };

  return parser;
};
