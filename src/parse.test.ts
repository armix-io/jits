import { getProps } from "./get-props";

test("props correct", () => {
  expect(getProps("rounded")).toMatchObject({
    op: "rounded",
  });
  expect(getProps("rounded-tr-lg")).toMatchObject({
    op: "rounded",
    target: "tr",
    scale: "lg",
  });
  expect(getProps("rounded-tr-none")).toMatchObject({
    op: "rounded",
    target: "tr",
    scale: "none",
  });
  expect(getProps("border")).toMatchObject({
    op: "border",
  });
  expect(getProps("border-t")).toMatchObject({
    op: "border",
    target: "t",
  });
  expect(getProps("border-t-4")).toMatchObject({
    op: "border",
    target: "t",
    scale: "4",
  });
  expect(getProps("border-t")).toMatchObject({
    op: "border",
    target: "t",
  });
  expect(getProps("border-opacity-25")).toMatchObject({
    op: "border-opacity",
    scale: "25",
  });
  expect(getProps("border-opacity-50")).toMatchObject({
    op: "border-opacity",
    scale: "50",
  });
  expect(getProps("border-white")).toMatchObject({
    op: "border",
    color: "white",
  });
  expect(getProps("border-transparent")).toMatchObject({
    op: "border",
    color: "transparent",
  });
  expect(getProps("border-red-500")).toMatchObject({
    op: "border",
    color: "red-500",
  });
  expect(getProps("border-t-red-500")).toMatchObject({
    op: "border",
    target: "t",
    color: "red-500",
  });
  expect(getProps("border-solid")).toMatchObject({
    op: "border",
    style: "solid",
  });
  expect(getProps("border-dotted")).toMatchObject({
    op: "border",
    style: "dotted",
  });
  expect(getProps("-mx-10")).toMatchObject({
    op: "m",
    target: "x",
    scale: "-10",
  });
  expect(getProps("m-10")).toMatchObject({
    op: "m",
    scale: "10",
  });
  expect(getProps("p-2")).toMatchObject({
    op: "p",
    scale: "2",
  });
  expect(getProps("-pr-2")).toMatchObject({
    op: "p",
    target: "r",
    scale: "-2",
  });
});
