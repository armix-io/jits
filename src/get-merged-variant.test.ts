import { rntw } from "./rntw";
import { defaultTheme } from "./theme";
import { getMergedVariant } from "./get-merged-variant";

test("correct merged variant", () => {
  const root = rntw(defaultTheme, [
    "bg-black",
    "text-blue-500",
    ["active", "text-white"],
  ]);

  const style = getMergedVariant(root, "active");

  expect(style).toMatchObject({
    style: {
      backgroundColor: defaultTheme.colors.black,
      color: defaultTheme.colors.white,
    },
    view: { backgroundColor: defaultTheme.colors.black },
    text: { color: defaultTheme.colors.white },
    image: {},
  });
});

test("correct merged undefined variant", () => {
  const root = rntw(defaultTheme, [
    "bg-black",
    "text-blue-500",
    ["active", "text-white"],
  ]);

  const style = getMergedVariant(root, undefined);

  expect(style).toMatchObject({
    style: {
      backgroundColor: defaultTheme.colors.black,
      color: defaultTheme.colors.blue[500],
    },
    view: { backgroundColor: defaultTheme.colors.black },
    text: { color: defaultTheme.colors.blue[500] },
    image: {},
  });
});
