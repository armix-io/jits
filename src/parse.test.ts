import { parse } from "./parse";
import { defaultTheme } from "./theme";
import { BorderRadiusMap, FontSizeMap, FontWeightMap } from "./maps";

test("parses rounded none correctly", () => {
  expect(parse(defaultTheme, "rounded-b-none")).toMatchObject({
    borderBottomLeftRadius: BorderRadiusMap.none,
    borderBottomRightRadius: BorderRadiusMap.none,
  });
  expect(parse(defaultTheme, "rounded-br-none")).toMatchObject({
    borderBottomRightRadius: BorderRadiusMap.none,
  });
});

test("font utilities", () => {
  expect(parse(defaultTheme, "font-2xl")).toMatchObject({
    fontSize: FontSizeMap["2xl"],
  });
  expect(parse(defaultTheme, "font-semibold")).toMatchObject({
    fontWeight: FontWeightMap.semibold,
  });
});
