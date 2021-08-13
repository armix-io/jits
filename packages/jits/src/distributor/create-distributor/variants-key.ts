import { Distributor, VariantType } from "../types";

export const variantsKey = (
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
