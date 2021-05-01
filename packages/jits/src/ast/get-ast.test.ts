import { getAst } from "./get-ast";

test("creates ast of instruction", () => {
  expect(getAst("border-t-0")).toMatchObject({
    op: "border",
    target: "t",
    value: "0",
    states: [],
    contexts: [],
  });
  expect(getAst(["dark", "active", "border-t-0"])).toMatchObject({
    op: "border",
    target: "t",
    value: "0",
    states: ["active"],
    contexts: ["dark"],
  });
  expect(getAst(["active", "border-red-500"])).toMatchObject({
    op: "border",
    target: undefined,
    value: "red-500",
    states: ["active"],
    contexts: [],
  });
  expect(getAst("text-red-500")).toMatchObject({
    op: "text",
    target: undefined,
    value: "red-500",
    states: [],
    contexts: [],
  });
  expect(getAst("-mx-24")).toMatchObject({
    op: "m",
    target: "x",
    value: "-24",
    states: [],
    contexts: [],
  });
});
