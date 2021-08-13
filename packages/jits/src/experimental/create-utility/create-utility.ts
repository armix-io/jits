import { Utility } from "../types";

export interface Options extends Utility {}

export type { Options as CreateUtilityOptions };

/**
 * A convenience function for defining a Utility object, for use with Parser via
 * its createParser factory function.
 *
 * @param options Options to configure Utility.
 * @returns New Utility object.
 */

export const createUtility = (options: Options): Utility => {
  const utility: Utility = { ...options };
  return utility;
};
