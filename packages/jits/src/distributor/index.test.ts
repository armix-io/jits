import { createParser } from "../core";
import utilities from "../core/utilities";
import { defaultDistributor } from "./default";
import { createDistributor } from "./create-distributor";

const parser = createParser({ utilities, onUnknown: "ignore" });
const distributor = createDistributor(parser, defaultDistributor.variantTypes);

test("distributor", () => {
  let a: ReturnType<typeof distributor["evaluate"]> = {};

  expect(distributor.evaluate([])).toMatchObject({});
  expect(
    distributor.evaluate(["text-black", "dark:text-white"])
  ).toMatchObject({ color: "#000" });
  expect(
    distributor.evaluate(["text-black", "dark:text-white"], { dark: true })
  ).toMatchObject({ color: "#fff" });
  expect(
    (a = distributor.evaluate(["text-black", "disabled:text-white"], {
      disabled: true,
    }))
  ).toMatchObject({ color: "#000" });
  expect(a.disabled).toMatchObject({ color: "#fff" });

  expect(() =>
    distributor.evaluate(["text-black", "light:text-white"])
  ).toThrow();
  expect(() =>
    distributor.evaluate(["text-black", "active:disabled:text-gray-900"])
  ).toThrow();
});
