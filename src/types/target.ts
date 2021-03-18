export enum Target {
  t = "Top",
  r = "Right",
  b = "Bottom",
  l = "Left",
  tr = "TopRight",
  tl = "TopLeft",
  br = "BottomRight",
  bl = "BottomLeft",
  x = "Horizontal",
  y = "Vertical",
}

export type Axis = "x" | "y";
// TODO: add "s"|"e" for "start" and "end" borders
export type Side = "t" | "r" | "b" | "l";
// TODO: add "ts"|"bs"|"te"|"be" for top/bottom-start/end corners
export type Corner = "tr" | "tl" | "br" | "bl";
