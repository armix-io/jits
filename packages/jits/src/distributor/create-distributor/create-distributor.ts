import { Style } from "../../core";
import { Distributor } from "../types";
import { variantsKey } from "./variants-key";
import { variantsMatch } from "./variants-match";
import { variantsValidate } from "./variants-validate";

export const createDistributor = (
  parser: Distributor["parser"],
  variantTypes: Distributor["variantTypes"]
) => {
  const distributor: Distributor = {
    parser,
    variantTypes,
    evaluate(inputs, environment = {}) {
      const { parser, variantTypes } = this;

      const style: ReturnType<Distributor["evaluate"]> = {};
      const variantStyles: Record<string, Style> = {};

      for (const input of inputs) {
        // Split input by ":", use last element as input for parse function.
        const variants = input.split(":");
        // The split operation will always have at least 1 element, pop! is safe.
        const inputBase = variants.pop()!;

        variantsValidate(variants, variantTypes);

        const match = variantsMatch(variants, environment);
        // Skip, if input's variants are not active in environment.
        if (!match) continue;

        // Otherwise, parse inputBase and add result to output style under key.
        const parsedStyle = parser.parse(inputBase);

        // Skip, if input result is undefined.
        if (!parsedStyle) continue;

        const stateVariant = variantsKey(variants, variantTypes);

        if (stateVariant) {
          variantStyles[stateVariant] = Object.assign(
            variantStyles[stateVariant] ?? {},
            parsedStyle
          );
        } else {
          Object.assign(style, parsedStyle);
        }
      }

      const _variantEmpty = {};
      const _variantTypesKeys = Object.keys(variantTypes);

      return new Proxy(style, {
        get(target, key) {
          // Attempt to access variant styles if matching key.
          if (_variantTypesKeys.includes(key as string)) {
            return variantStyles[key as string] ?? _variantEmpty;
          }
          // Default to target key value.
          return target[key as string];
        },
      });
    },
  };

  return distributor;
};
