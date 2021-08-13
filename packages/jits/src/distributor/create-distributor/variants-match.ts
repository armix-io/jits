export const variantsMatch = (
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
