import { Style } from "../../core";
import { Distributor, VariantType } from "../types";

const variantsValidate = (
  variants: string[],
  variantTypes: Distributor["variantTypes"]
): void => {
  // Reference to stateVariant (if found), will conflict if more than one.
  let stateVariant: string | undefined = undefined;

  // Check all variants.
  for (const variant of variants) {
    // Throw, if variant is not defined as a variant type.
    if (!Object.keys(variantTypes).includes(variant))
      throw new TypeError(
        `Unknown variant "${variant}".` +
          ` Check for typo, or add "${variant}" to variantTypes.`
      );
    // Throw, if current variant is also a state variant, max one allowed.
    if (variantTypes[variant] === VariantType.State && stateVariant)
      throw new TypeError(
        `State variant "${variant}" conflicts with "${stateVariant}".` +
          ` No more than one state variant can be defined per input.`
      );
    // Set stateVariant if applicable, even if not enabled.
    stateVariant = variant;
  }
};

const variantsMatch = (
  variants: string[],
  environment: Record<string, boolean>
): boolean => {
  // If environment is empty, no variants can match.
  if (!Object.keys(environment).length) return false;

  // Check all variants if active in environment.
  for (const variant of variants) {
    // Fail, if environment value for variant is not truthy.
    if (!environment[variant]) return false;
  }

  // Success, all variants in environment are truthy.
  return true;
};

const variantsKey = (
  variants: string[],
  variantTypes: Distributor["variantTypes"]
): string | undefined => {
  // Check all variants if active in environment.
  for (const variant of variants) {
    // State variant found.
    if (variantTypes[variant] === VariantType.State) return variant;
  }

  // No state variant.
  return undefined;
};

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
