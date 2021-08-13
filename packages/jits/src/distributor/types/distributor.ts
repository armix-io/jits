import { Style, Parser } from "../../core";
import { VariantType } from "./variant";

export interface Distributor {
  /**
   * Handle to defined Parser object.
   */

  parser: Parser;

  /**
   * Describes available variants for grouping by state or enabling by context.
   *
   * @example
   * {
   *   "dark": VariantType.Context, // enable/disable
   *   "hover": VariantType.State,  // group results
   * }
   */

  variantTypes: Record<string, VariantType>;

  /**
   * Distributes all input styles based on variants/environment.
   *
   * @param inputs Array of input strings (with optional variants) to be parsed.
   * @param environment Map of variant names to (typically) boolean values, to
   * determine what inputs to evaluate and how to distribute Style results.
   * @returns A Style object Proxy of root (non-variant) styles, and all other
   * styles grouped by state variant accessed by the variant's name.
   *
   * @example
   * evaluate(
   *   ["text-dark", "dark:text-white",
   *    "hover:text-blue", "hover:dark:text-red"],
   *   { dark: true, hover: true }
   * )
   * {
   *   // (root)
   *   color: "#fff", // white, because { dark: true }
   *
   *   // (proxy)
   *   hover: { // if { hover: true }
   *     color: "#f00", // red, because { dark: true }
   *   },
   * }
   */

  evaluate(
    inputs: string[],
    environment?: Record<string, any>
  ): Style & Record<string, Style>;
}
