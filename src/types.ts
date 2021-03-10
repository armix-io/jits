import {
  FlexMap,
  AlignSelfMap,
  AlignItemsMap,
  AlignContentMap,
  JustifyContentMap,
  FontSizeMap,
  OpacityMap,
} from "./maps";

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

export type Flex = "flex" | `flex-${1 | 2 | 3 | 4 | 5 | keyof typeof FlexMap}`;
export type AlignSelf = `self-${keyof typeof AlignSelfMap}`;
export type AlignItems = `items-${keyof typeof AlignItemsMap}`;
export type AlignContent = `content-${keyof typeof AlignContentMap}`;
export type JustifyContent = `justify-${keyof typeof JustifyContentMap}`;
export type FontSize = `text-${keyof typeof FontSizeMap}`;
export type Opacity = `opacity-${keyof typeof OpacityMap}`;

export type RootClassName =
  | Flex
  | AlignSelf
  | AlignItems
  | AlignContent
  | JustifyContent
  | FontSize
  | Opacity
  | TextColor
  | BackgroundColor;

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
