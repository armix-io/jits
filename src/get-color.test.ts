import { defaultTheme } from "./theme";
import { getColor } from "./get-color";

test("correct root colors", () => {
  expect(getColor(defaultTheme, "transparent")).toBe(
    defaultTheme.colors.transparent
  );
  expect(getColor(defaultTheme, "white")).toBe(defaultTheme.colors.white);
  expect(getColor(defaultTheme, "black")).toBe(defaultTheme.colors.black);
});

test("correct scaled colors", () => {
  expect(getColor(defaultTheme, "red-200")).toBe(defaultTheme.colors.red[200]);
  expect(getColor(defaultTheme, "green-500")).toBe(
    defaultTheme.colors.green[500]
  );
  expect(getColor(defaultTheme, "blue-900")).toBe(
    defaultTheme.colors.blue[900]
  );
});
