import { getAst } from "./get-ast";

test("creates ast of instruction", () => {
  expect(getAst("border-t-0")).toMatchObject({
    op: "border",
    target: "t",
    value: "0",
  });
  expect(getAst("border-t-0")).toMatchObject({
    op: "border",
    target: "t",
    value: "0",
  });
  expect(getAst("border-red-500")).toMatchObject({
    op: "border",
    target: undefined,
    value: "red-500",
  });
  expect(getAst("text-red-500")).toMatchObject({
    op: "text",
    target: undefined,
    value: "red-500",
  });
  expect(getAst("-mx-24")).toMatchObject({
    op: "m",
    target: "x",
    value: "-24",
  });
  expect(getAst("-start-8")).toMatchObject({
    op: "start",
    target: undefined,
    value: "-8",
  });
});
