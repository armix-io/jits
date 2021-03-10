import { defaultTheme } from "./theme";
import { rntw } from "./rntw";
import { ClassName } from "./types";
import { FontSizeMap, OpacityMap } from "./maps";

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
  const styles = rntw(defaultTheme, classNames);

  expect(styles.color).toBe(defaultTheme.colors.blue[600]);
  expect(styles.backgroundColor).toBe(undefined);

  expect(styles.flexDirection).toBe("row");
  expect(styles.alignItems).toBe("center");
  expect(styles.justifyContent).toBe("center");
  expect(styles.fontSize).toBe(FontSizeMap["3xl"]);
  expect(styles.opacity).toBe(undefined);

  expect(styles.active).toMatchObject({
    color: defaultTheme.colors.blue[200],
    backgroundColor: defaultTheme.colors.gray[100],
    opacity: OpacityMap[50],
  });
  expect(styles.disabled).toMatchObject({
    backgroundColor: defaultTheme.colors.black,
  });
});

test("create correct dark style", () => {
  const styles = rntw({ ...defaultTheme, mode: "dark" }, classNames);

  expect(styles.color).toBe(defaultTheme.colors.blue[100]);
  expect(styles.backgroundColor).toBe(undefined);

  expect(styles.flexDirection).toBe("row");
  expect(styles.alignItems).toBe("center");
  expect(styles.justifyContent).toBe("center");
  expect(styles.fontSize).toBe(FontSizeMap["5xl"]);
  expect(styles.opacity).toBe(undefined);

  expect(styles.active).toMatchObject({
    color: defaultTheme.colors.blue[200],
    backgroundColor: defaultTheme.colors.gray[900],
    opacity: OpacityMap[25],
  });
  expect(styles.disabled).toMatchObject({
    backgroundColor: defaultTheme.colors.black,
  });
});
