import { Utility } from "../utilities";
import { Config } from "./config";

export const createJits = <
  E extends readonly string[],
  V extends readonly string[],
  O extends Config<E, V>
>(
  config: O
) => {
  type Style = Record<string, any>;
  type Variants = O["envs"][number] | O["states"][number];

  /**
   * accepts:
   * ["utility"]
   * ["style"]
   * ["utility", "utility"]
   * ["utility", "style"]
   * ["utility", ["utility"]]
   * ["utility", ["style"]]
   * ["utility", ["variant", "utility"]]
   * ["utility", ["variant", "style"]]
   * ["utility", ["variant", ["utility", "utility"]]]
   * ["utility", ["variant", "variant", "utility"]]
   * ["utility", ["variant", "variant", ["utility"]]]
   * ["utility", ["variant", "variant", ["utility", "utility"]]]
   */

  const jits = (
    args: (
      | Utility
      | Style
      | (Utility | Variants | Style | (Utility | Style)[])[]
    )[],
    options: Record<Variants, boolean>
  ) => {
    return {};
  };

  return jits;
};
