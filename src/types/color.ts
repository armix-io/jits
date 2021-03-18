export type ColorName =
  | "transparent"
  | "black"
  | "white"
  | "gray"
  | "red"
  | "yellow"
  | "green"
  | "blue"
  | "indigo"
  | "purple"
  | "pink";

export type ColorNameAbsolute = "transparent" | "white" | "black";

export type ColorScale =
  | 50
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900;

export type Color =
  | Extract<ColorName, ColorNameAbsolute>
  | `${Exclude<ColorName, ColorNameAbsolute>}-${ColorScale}`;
