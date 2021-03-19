import { Color } from "./color";
import { Axis, Side, Corner } from "./target";
import {
  FlexMap,
  AlignSelfMap,
  AlignItemsMap,
  AlignContentMap,
  JustifyContentMap,
  FontSizeMap,
  FontWeightMap,
  OpacityMap,
  BorderRadiusMap,
  BorderWidthMap,
  BorderStyleMap,
  SpacingMap,
} from "../maps";

export type TextColor = `text-${Color}`;
export type BackgroundColor = `bg-${Color}`;

export type Flex = "flex" | `flex-${1 | 2 | 3 | 4 | 5 | keyof typeof FlexMap}`;

export type AlignSelf = `self-${keyof typeof AlignSelfMap}`;
export type AlignItems = `items-${keyof typeof AlignItemsMap}`;
export type AlignContent = `content-${keyof typeof AlignContentMap}`;
export type JustifyContent = `justify-${keyof typeof JustifyContentMap}`;

export type FontSize = keyof typeof FontSizeMap;
export type FontSizeClass = `font-${keyof typeof FontSizeMap}`;

export type FontWeight = keyof typeof FontWeightMap;
export type FontWeightClass = `font-${keyof typeof FontWeightMap}`;

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
