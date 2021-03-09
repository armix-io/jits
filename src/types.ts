import {
  FlexMap,
  AlignSelfMap,
  AlignItemsMap,
  AlignContentMap,
  JustifyContentMap,
  FontSizeMap,
} from "./maps";

export type Increments = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";

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

export type Flex = "flex" | `flex-${Increments | keyof typeof FlexMap}`;
export type AlignSelf = `self-${keyof typeof AlignSelfMap}`;
export type AlignItems = `items-${keyof typeof AlignItemsMap}`;
export type AlignContent = `content-${keyof typeof AlignContentMap}`;
export type JustifyContent = `justify-${keyof typeof JustifyContentMap}`;
export type FontSize = `text-${keyof typeof FontSizeMap}`;

export type RootClassName =
  | Flex
  | AlignSelf
  | AlignItems
  | AlignContent
  | JustifyContent
  | FontSize
  | TextColor
  | BackgroundColor;
export type ActiveClassName = `active:${RootClassName}`;

export type AllClassName = RootClassName | ActiveClassName;
export type DarkClassName = `dark:${AllClassName}`;

export type ClassName = AllClassName | DarkClassName;
