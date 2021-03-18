import { getMergedStyleProp } from "./get-merged-style-prop";

test("should correctly merge styles", () => {
  expect(
    getMergedStyleProp({}, [{ color: "white" }], {}, { color: "black" })
  ).toMatchObject({ color: "black" });
  expect(
    getMergedStyleProp({}, { color: "white" }, [{}, { color: "black" }])
  ).toMatchObject({ color: "black" });
});

test("should correctly out empty if no args", () => {
  expect(getMergedStyleProp()).toMatchObject({});
});

test("should handle a mix of undefined and objects", () => {
  expect(
    getMergedStyleProp({ backgroundColor: "red" }, undefined, {}, [undefined])
  ).toMatchObject({ backgroundColor: "red" });
});
