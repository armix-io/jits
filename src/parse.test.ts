import { parse } from "./parse";
import { defaultTheme } from "./theme";
import { BorderRadiusMap } from "./maps";

test("parses rounded none correctly", () => {
  expect(parse(defaultTheme, "rounded-b-none")).toMatchObject({
    borderBottomLeftRadius: BorderRadiusMap.none,
    borderBottomRightRadius: BorderRadiusMap.none,
  });
  expect(parse(defaultTheme, "rounded-br-none")).toMatchObject({
    borderBottomRightRadius: BorderRadiusMap.none,
  });
});
