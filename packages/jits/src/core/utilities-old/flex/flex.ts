import { Parse } from "../parse";

export type Utility = `flex${
  | ""
  | `-${
      | `${"row" | "col"}${"" | `-${"reverse"}`}`
      | `${"grow" | "shrink"}${"" | `-${"0"}`}`
      | `wrap${"" | `-${"reverse"}`}`
      | "nowrap"
      | "auto"
      | "initial"
      | "none"
      | 1
      | 2
      | 3
      | 4
      | 5}`}`;

export const ops = ["flex"] as const;

export const test = (op: any) => ops.includes(op) || op.startsWith("flex");

export const parse: Parse = ({ ast, invalidValue, invalidOp }) => {
  const { op, value: $value } = ast;

  if (op === "flex") {
    if (!$value) {
      return {
        display: "flex",
      };
    }

    if ($value === "auto") {
      return { flexGrow: 1, flexShrink: 1, flexBasis: "auto" };
    }

    if ($value === "initial") {
      return { flexGrow: 0, flexShrink: 1, flexBasis: "auto" };
    }

    if ($value === "none") {
      return { flexGrow: 0, flexShrink: 0, flexBasis: "auto" };
    }

    const flex = parseInt($value);
    if (!isNaN(flex)) {
      return { flex };
    }

    throw invalidValue();
  }

  if (op.startsWith("flex")) {
    if (op.endsWith("-row")) {
      return { flexDirection: `row${$value ? `-${$value}` : ""}` };
    }

    if (op.endsWith("-col")) {
      return { flexDirection: `column${$value ? `-${$value}` : ""}` };
    }

    if (op.endsWith("-grow")) {
      const flexGrow = $value ? parseInt($value) : 1;
      if (!isNaN(flexGrow)) {
        return { flexGrow };
      }

      throw invalidValue();
    }

    if (op.endsWith("-shrink")) {
      const flexShrink = $value ? parseInt($value) : 1;
      if (!isNaN(flexShrink)) {
        return { flexShrink };
      }

      throw invalidValue();
    }

    if (op.endsWith("-wrap")) {
      return { flexWrap: `wrap${$value ? `-${$value}` : ""}` };
    }

    if (op.endsWith("-nowrap")) {
      return { flexWrap: "nowrap" };
    }
  }

  throw invalidOp();
};
