import {
  FlexMap,
  AlignSelfMap,
  AlignItemsMap,
  AlignContentMap,
  JustifyContentMap,
  FontSizeMap,
  OpacityMap,
  BorderRadiusMap,
  BorderWidthMap,
  BorderStyleMap,
  SpacingMap,
} from "./maps";

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

export type ColorRoots = "transparent" | "white" | "black";

export type Color =
  | Extract<ColorName, ColorRoots>
  | `${Exclude<ColorName, ColorRoots>}-${ColorScale}`;

export type TextColor = `text-${Color}`;
export type BackgroundColor = `bg-${Color}`;

export type Axis = "x" | "y";
// TODO: add "s"|"e" for "start" and "end" borders
export type Side = "t" | "r" | "b" | "l";
// TODO: add "ts"|"bs"|"te"|"be" for top/bottom-start/end corners
export type Corner = "tr" | "tl" | "br" | "bl";

export type Flex = "flex" | `flex-${1 | 2 | 3 | 4 | 5 | keyof typeof FlexMap}`;
export type AlignSelf = `self-${keyof typeof AlignSelfMap}`;
export type AlignItems = `items-${keyof typeof AlignItemsMap}`;
export type AlignContent = `content-${keyof typeof AlignContentMap}`;
export type JustifyContent = `justify-${keyof typeof JustifyContentMap}`;
export type FontSize = `text-${keyof typeof FontSizeMap}`;
export type Opacity = `opacity-${keyof typeof OpacityMap}`;
export type MarginClass = `${"" | "-"}m${
  | ""
  | Axis
  | Side}-${keyof typeof SpacingMap}`;
export type PaddingClass = `${"" | "-"}p${
  | ""
  | Axis
  | Side}-${keyof typeof SpacingMap}`;

type WithoutDefault<T> = Exclude<T, "DEFAULT">;

export type BorderRadius = `rounded${
  | ""
  | `${"" | `-${Side | Corner}`}${
      | ""
      | `-${WithoutDefault<keyof typeof BorderRadiusMap>}`}`}`;
export type BorderWidth = `border${
  | ""
  | `${"" | `-${Side}`}${
      | ""
      | `-${WithoutDefault<keyof typeof BorderWidthMap>}`}`}`;
export type BorderColor = `border-${Color | `${Side}-${Color}`}`;
// TODO: opacity must convert border-color to rbga and set alpha using opacity
export type BorderOpacity = `border-opacity-${keyof typeof OpacityMap}`;

export type BorderStyle = keyof typeof BorderStyleMap;
export type BorderStyleClass = `border-${keyof typeof BorderStyleMap}`;

export type Borders =
  | BorderRadius
  | BorderWidth
  | BorderColor
  | BorderOpacity
  | BorderStyleClass;

export type RootClassName =
  | Flex
  | AlignSelf
  | AlignItems
  | AlignContent
  | JustifyContent
  | FontSize
  | Opacity
  | TextColor
  | BackgroundColor
  | Borders
  | MarginClass
  | PaddingClass;

export interface Config {}

export type DefaultVariants = "active" | "focus" | "disabled" | "checked";
export type CustomVariants = "Variants" extends keyof Config
  ? Config["Variants"]
  : never;
export type Variants = DefaultVariants | CustomVariants;

export type ActiveClassName = `${Variants}:${RootClassName}`;

export type AllClassName = RootClassName | ActiveClassName;
export type DarkClassName = `dark:${AllClassName}`;

export type ClassName = AllClassName | DarkClassName;
