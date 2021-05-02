import { defaultColorMap } from "./color-map";
import { getColor } from "./get-color";

test("correct root colors", () => {
  expect(getColor(defaultColorMap)("transparent")).toBe(
    defaultColorMap.transparent
  );
  expect(getColor(defaultColorMap)("white")).toBe(defaultColorMap.white);
  expect(getColor(defaultColorMap)("black")).toBe(defaultColorMap.black);
});

test("correct scaled colors", () => {
  expect(getColor(defaultColorMap)("red-200")).toBe(defaultColorMap.red[200]);
  expect(getColor(defaultColorMap)("green-500")).toBe(
    defaultColorMap.green[500]
  );
  expect(getColor(defaultColorMap)("blue-900")).toBe(defaultColorMap.blue[900]);
});
