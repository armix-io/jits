import { Utility } from "../types";

/**
 * Matches inner value of an arbitrary value string.
 * @example
 * "[foobar]" => "foobar"
 * "[100px]" => "100px"
 */

export const reArbitraryInnerValue = /^\[(\S*)\]$/;

/**
 * Creates a new set of buildArgs based on inputArgs.
 * - converts "[value]" into "value" if utility arg specifies "[]" for arg.
 * @param utilityArgs Args definition schema.
 * @param inputArgs Args to used to produce modified args.
 * @returns Modified args for use with a utility's build function.
 */

export const argsPipe = (
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
