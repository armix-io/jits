import { Distributor, VariantType } from "../types";

export const variantsValidate = (
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
