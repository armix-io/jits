import defaultParser from "../core";
import { createDistributor } from "./create-distributor";
import { VariantType } from "./types";

export const defaultDistributor = createDistributor(defaultParser, {
  dark: VariantType.Context,
  active: VariantType.State,
  disabled: VariantType.State,
});
export default defaultDistributor;

const distributor = defaultDistributor;

let a: ReturnType<typeof distributor["evaluate"]> = {};

console.log((a = distributor.evaluate([])));

console.log((a = distributor.evaluate(["text-black", "dark:text-white"])));

try {
  console.log((a = distributor.evaluate(["text-black", "light:text-white"])));
} catch (e) {
  console.log(e.message);
}

try {
  console.log(
    (a = distributor.evaluate(["text-black", "active:disabled:text-gray-900"]))
  );
} catch (e) {
  console.log(e.message);
}

console.log(
  (a = distributor.evaluate(["text-black", "dark:text-white"], { dark: true }))
);

console.log(
  (a = distributor.evaluate(["text-black", "disabled:text-white"], {
    disabled: true,
  })),
  a.disabled
);
