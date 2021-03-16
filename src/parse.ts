import { Color, BorderStyle, ClassName } from "./types";

const matchSide = ["t", "r", "b", "l"];
const matchCorner = ["tr", "tl", "br", "bl"];
const matchAxis = ["x", "y"];

const reOp = /^(rounded|border|opacity|m|p)(t|r|b|l|x|y)?$/;
const reTarget = /^(((t|b)(r|l)?)|(l|r|x|y))$/;

const matchScale = ["none", "sm", "md", "lg", "xl", "2xl", "3xl", "full"];
const matchStyle = ["solid", "dotted", "dashed"];
const matchColor = [
  "transparent",
  "black",
  "white",
  "gray",
  "red",
  "yellow",
  "green",
  "blue",
  "indigo",
  "purple",
  "pink",
];

export const getProps = (className: ClassName) => {
  const args = className.split("-");
  const props: {
    op?: string;
    target?: string;
    scale?: string;
    color?: Color;
    style?: BorderStyle;
  } = {};
  for (const [i, arg] of args.entries()) {
    const $op = arg.match(reOp);
    if ($op) {
      const [, op, target] = $op;
      if (props.op) {
        props.op = `${props.op}-${op}`;
      } else {
        props.op = op;
      }
      props.target = target;
      continue;
    }
    const $target = arg.match(reTarget);
    if ($target) {
      props.target = arg;
    } else if (matchScale.includes(arg)) {
      props.scale = arg;
    } else if (matchColor.includes(arg)) {
      const scale = args[i + 1];
      props.color = `${arg}${scale ? `-${scale}` : ""}` as Color;
    } else if (matchStyle.includes(arg)) {
      props.style = arg as BorderStyle;
    } else {
      const negative = className.startsWith("-");
      const maybeValue = parseInt(arg);
      if (!isNaN(maybeValue)) {
        props.scale = `${negative ? "-" : ""}${arg}`;
      }
    }
  }
  return props;
};
