import { Style } from "./style";

/**
 * Defines how to handle a parsed input of args to build an output Style object.
 */

export interface Utility {
  /**
   * Accepts an mixed array of strings and/or string arrays. String arrays will
   * be searched for a matching arg, and primitive strings will be compared for
   * equality.
   *
   * @example
   * // match input "absolute" only
   * ["absolute"]
   *
   * // match input "absolute" or "relative"
   * [["absolute", "relative"]]
   *
   * // match input "flex-0" or "flex-1" or "flex-2"
   * ["flex", ["0", "1", "2"]]
   */

  args: (string | string[])[];

  /**
   * Accepts a function that builds an output style object with given args, or a
   * Style object to be statically returned (without needing a function).
   *
   * @returns Style object, or `undefined` if something isn't compatible.
   */

  build: ((args: string[]) => Style | undefined) | Style;
}
