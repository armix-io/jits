import { Op as Utility } from "./types";
import { Options } from "./types";

export const createJits = <
  E extends readonly string[],
  V extends readonly string[],
  O extends Options<E, V>
>(
  defaultOptions: O
) => {
  type Variants = O["envs"][number] | O["states"][number];

  /**
   * accepts:
   * ["utility"]
   * ["utility", "utility"]
   * ["utility", ["utility"]]
   * ["utility", ["variant", "utility"]]
   * ["utility", ["variant", ["utility", "utility"]]]
   * ["utility", ["variant", "variant", "utility"]]
   * ["utility", ["variant", "variant", ["utility"]]]
   * ["utility", ["variant", "variant", ["utility", "utility"]]]
   */

  const jits = (
    args: (Utility | Variants | Record<string, any> | [])[],
    options: {}
  ) => {
    return {};
  };

  return jits;
};
