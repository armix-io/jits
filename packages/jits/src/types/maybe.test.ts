import { BorderRadiusMap, SpacingMap } from "./maps";
import { maybe } from "./maybe";

test("correct value or undefined values", () => {
  expect(maybe(SpacingMap, "0")).toBe(SpacingMap[0]);

  expect(maybe(SpacingMap, "red-500")).toBe(undefined);

  expect(maybe(BorderRadiusMap, "none")).toBe(BorderRadiusMap.none);

  expect(maybe(BorderRadiusMap, "blue-600")).toBe(undefined);
});
