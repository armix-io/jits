export type ColorName =
  | "transparent"
  | "white"
  | "black"
  | "blue"
  | "gray"
  | "green"
  | "indigo"
  | "pink"
  | "purple"
  | "red"
  | "yellow";

export type ColorSetName = Extract<
  ColorName,
  "blue" | "gray" | "green" | "indigo" | "pink" | "purple" | "red" | "yellow"
>;

export type ColorSetScale =
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
  | Exclude<ColorName, ColorSetName>
  | `${ColorSetName}-${ColorSetScale}`;
