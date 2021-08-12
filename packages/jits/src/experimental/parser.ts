export interface Parser {
  /**
   * Map of previously evaluated inputs to corresponding cached outputs.
   */

  cache: Map<string, Record<string, any> | undefined>;

  /**
   * Transforms input string into Style object.
   * @param input Input string to be evaluated.
   * @returns Style object, or `undefined` if no match or invalid input.
   */

  parse(input: string): Record<string, any> | undefined;
}
