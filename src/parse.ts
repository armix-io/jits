import { Color, BorderStyle } from "./types";

const matchOp = ["rounded", "border", "opacity"];
const matchSide = ["t", "r", "b", "l"];
const matchCorner = ["tr", "tl", "br", "bl"];
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

export const getProps = (args: string[]) => {
  const props: {
    op?: string;
    target?: string;
    scale?: string;
    color?: Color;
    style?: BorderStyle;
  } = {};
  for (const [i, arg] of args.entries()) {
    if (matchOp.includes(arg)) {
      if (i > 0) {
        props.op = `${props.op}-${arg}`;
      } else {
        props.op = arg;
      }
      continue;
    } else if (i === 0) {
      // something is wrong, op should be first thing to be set
      return null;
    }
    if (matchSide.includes(arg) || matchCorner.includes(arg)) {
      props.target = arg;
      continue;
    }
    if (matchScale.includes(arg)) {
      props.scale = arg;
      continue;
    }
    if (matchColor.includes(arg)) {
      const scale = args[i + 1];
      props.color = `${arg}${scale ? `-${scale}` : ""}` as Color;
      continue;
    }
    if (matchStyle.includes(arg)) {
      props.style = arg as BorderStyle;
      continue;
    }
    const maybeValue = parseInt(arg);
    if (!isNaN(maybeValue)) {
      props.scale = arg;
      continue;
    }
  }
  return props;
};
