import { getProps } from "./parse";

test("props correct", () => {
  expect(getProps("rounded".split("-"))).toMatchObject({
    op: "rounded",
  });
  expect(getProps("rounded-tr-lg".split("-"))).toMatchObject({
    op: "rounded",
    target: "tr",
    scale: "lg",
  });
  expect(getProps("rounded-tr-none".split("-"))).toMatchObject({
    op: "rounded",
    target: "tr",
    scale: "none",
  });
  expect(getProps("border".split("-"))).toMatchObject({
    op: "border",
  });
  expect(getProps("border-t".split("-"))).toMatchObject({
    op: "border",
    target: "t",
  });
  expect(getProps("border-t-4".split("-"))).toMatchObject({
    op: "border",
    target: "t",
    scale: "4",
  });
  expect(getProps("border-t".split("-"))).toMatchObject({
    op: "border",
    target: "t",
  });
  expect(getProps("border-opacity".split("-"))).toMatchObject({
    op: "border-opacity",
  });
  expect(getProps("border-opacity-50".split("-"))).toMatchObject({
    op: "border-opacity",
    scale: "50",
  });
  expect(getProps("border-white".split("-"))).toMatchObject({
    op: "border",
    color: "white",
  });
  expect(getProps("border-transparent".split("-"))).toMatchObject({
    op: "border",
    color: "transparent",
  });
  expect(getProps("border-red-500".split("-"))).toMatchObject({
    op: "border",
    color: "red-500",
  });
  expect(getProps("border-t-red-500".split("-"))).toMatchObject({
    op: "border",
    target: "t",
    color: "red-500",
  });
  expect(getProps("border-solid".split("-"))).toMatchObject({
    op: "border",
    style: "solid",
  });
  expect(getProps("border-dotted".split("-"))).toMatchObject({
    op: "border",
    style: "dotted",
  });
});
