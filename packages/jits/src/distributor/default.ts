import defaultParser from "../core";
import { createDistributor } from "./create-distributor";
import { VariantType } from "./types";

export const defaultDistributor = createDistributor(defaultParser, {
  dark: VariantType.Context,
  active: VariantType.State,
  disabled: VariantType.State,
});
export default defaultDistributor;
