import { rntw } from "./rntw";
import { defaultTheme } from "./theme";
import { ClassName } from "./types";
import {
  BorderRadiusMap,
  BorderWidthMap,
  FontSizeMap,
  OpacityMap,
  SpacingMap,
} from "./maps";

const classNames: ClassName[] = [
  "text-blue-600",
  "dark:text-blue-100",
  "active:text-blue-200",
  "active:bg-gray-100",
  "dark:active:bg-gray-900",
  "disabled:bg-black",
  "flex-row",
  "items-center",
  "justify-center",
  "text-3xl",
  "dark:text-5xl",
  "active:opacity-50",
  "dark:active:opacity-25",
];

test("create correct style", () => {
  const { style, active, disabled } = rntw(defaultTheme, classNames);

  expect(style.color).toBe(defaultTheme.colors.blue[600]);
  expect(style.backgroundColor).toBe(undefined);

  expect(style.flexDirection).toBe("row");
  expect(style.alignItems).toBe("center");
  expect(style.justifyContent).toBe("center");
  expect(style.fontSize).toBe(FontSizeMap["3xl"]);
  expect(style.opacity).toBe(undefined);

  expect(active.style).toMatchObject({
    color: defaultTheme.colors.blue[200],
    backgroundColor: defaultTheme.colors.gray[100],
    opacity: OpacityMap[50],
  });
  expect(disabled.style).toMatchObject({
    backgroundColor: defaultTheme.colors.black,
  });
});

test("create correct dark style", () => {
  const { style, active, disabled } = rntw(
    { ...defaultTheme, mode: "dark" },
    classNames
  );

  expect(style.color).toBe(defaultTheme.colors.blue[100]);
  expect(style.backgroundColor).toBe(undefined);

  expect(style.flexDirection).toBe("row");
  expect(style.alignItems).toBe("center");
  expect(style.justifyContent).toBe("center");
  expect(style.fontSize).toBe(FontSizeMap["5xl"]);
  expect(style.opacity).toBe(undefined);

  expect(active.style).toMatchObject({
    color: defaultTheme.colors.blue[200],
    backgroundColor: defaultTheme.colors.gray[900],
    opacity: OpacityMap[25],
  });
  expect(disabled.style).toMatchObject({
    backgroundColor: defaultTheme.colors.black,
  });
});

test("border style are correct", () => {
  const { style } = rntw(defaultTheme, [
    "border",
    "rounded",
    "rounded-tr-2xl",
    "border-red-600",
    "border-b-blue-600",
    "border-dotted",
  ]);

  expect(style).toMatchObject({
    borderWidth: BorderWidthMap["DEFAULT"],
    borderRadius: BorderRadiusMap["DEFAULT"],
    borderTopRightRadius: BorderRadiusMap["2xl"],
    borderColor: defaultTheme.colors.red[600],
    borderBottomColor: defaultTheme.colors.blue[600],
    borderStyle: "dotted",
  });
});

test("margin style are correct", () => {
  const { style } = rntw(defaultTheme, [
    "p-2",
    "px-4",
    "pb-10",
    "m-1",
    "mb-12",
    "my-2",
  ]);

  expect(style).toMatchObject({
    padding: SpacingMap["2"],
    paddingHorizontal: SpacingMap["4"],
    paddingBottom: SpacingMap["10"],
    margin: SpacingMap["1"],
    marginBottom: SpacingMap["12"],
    marginVertical: SpacingMap["2"],
  });
});

test("style are grouped correctly", () => {
  const { style, text } = rntw(defaultTheme, ["bg-black", "text-white"]);

  expect(style).toMatchObject({
    color: defaultTheme.colors.white,
    backgroundColor: defaultTheme.colors.black,
  });

  expect(text).toMatchObject({
    color: defaultTheme.colors.white,
  });
});
