import { UtilityArgs } from "../types";

/**
 * Checks if inputArgs is compatible with utilityArgs.
 * @param utilityArgs Args definition schema.
 * @param inputArgs Args to validate against utilityArgs as schema.
 * @returns `true` if match, `false` if no match or incompatible args inputs.
 */

export const argsMatch = (
  utilityArgs: UtilityArgs,
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
