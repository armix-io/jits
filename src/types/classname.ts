import { StateVariant, ContextVariant } from "./variants";
import {
  Flex,
  AlignSelf,
  AlignItems,
  AlignContent,
  JustifyContent,
  FontSizeClass,
  FontWeightClass,
  Opacity,
  TextColor,
  BackgroundColor,
  BorderRadius,
  BorderWidth,
  BorderColor,
  BorderOpacity,
  BorderStyleClass,
  MarginClass,
  PaddingClass,
} from "./utilities";

export type RootClassName =
  | Flex
  | AlignSelf
  | AlignItems
  | AlignContent
  | JustifyContent
  | FontSizeClass
  | FontWeightClass
  | Opacity
  | TextColor
  | BackgroundColor
  | BorderRadius
  | BorderWidth
  | BorderColor
  | BorderOpacity
  | BorderStyleClass
  | MarginClass
  | PaddingClass;

export type ClassName = `${"" | `${ContextVariant}:`}${
  | ""
  | `${StateVariant}:`}${RootClassName}`;
