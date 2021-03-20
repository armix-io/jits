import { Color } from "./color";
import { Axis, Side, Corner } from "./target";
import { Theme } from "../theme";
import {
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
  OverflowMap,
  ZIndexMap,
  TextAlignMap,
  TextAlignVerticalMap,
  WritingDirectionMap,
  TrackingMap,
  LeadingMap,
  TextTransformMap,
  TextDecorationStyleMap,
  TextDecorationLineMap,
} from "../maps";

type WithoutDefault<T> = Exclude<T, "DEFAULT">;

export type MPTBLRSEOp = `${"" | "-"}${
  | "m"
  | "p"
  | "top"
  | "bottom"
  | "left"
  | "right"
  | "start"
  | "end"}${"" | Axis | Side}-${keyof typeof SpacingMap}`;

export type HWOp = `${"h" | "w"}-${keyof typeof SpacingMap}`;

export type OverflowOp = `overflow-${keyof typeof OverflowMap}`;

export type HiddenOp = `hidden`;

export type FlexOp = `flex${
  | ""
  | `-${
      | `${"row" | "col"}${"" | `-${"reverse"}`}`
      | `${"grow" | "shrink"}${"" | `-${"0"}`}`
      | `wrap${"" | `-${"reverse"}`}`
      | "nowrap"
      | "auto"
      | "initial"
      | "none"
      | 1
      | 2
      | 3
      | 4
      | 5}`}`;

export type SelfOp = `self-${keyof typeof AlignSelfMap}`;

export type ItemsOp = `items-${keyof typeof AlignItemsMap}`;

export type ContentOp = `content-${keyof typeof AlignContentMap}`;

export type JustifyOp = `justify-${keyof typeof JustifyContentMap}`;

export type BGOp = `bg-${Color}`;

export type OpacityOp = `opacity-${keyof typeof OpacityMap}`;

export type BorderOp = `border${
  | ""
  | `${"" | `-${Side}`}${
      | ""
      | `-${keyof typeof BorderStyleMap}`
      | `-${WithoutDefault<keyof typeof BorderWidthMap>}`
      | `-${Color}`}`}`;

export type RoundedOp = `rounded${
  | ""
  | `${"" | `-${Side | Corner}`}${
      | ""
      | `-${WithoutDefault<keyof typeof BorderRadiusMap>}`}`}`;

export type PositionOp = "absolute" | "relative";

export type ZOp = `z-${keyof typeof ZIndexMap}`;

export type ShadowOp = never;

export type AspectOp = never;

export type LTRRTLOp = "ltr" | "rtl";

export type TextOp = `text-${
  | keyof typeof FontSizeMap
  | keyof typeof TextAlignMap
  | keyof typeof TextAlignVerticalMap
  | keyof typeof WritingDirectionMap
  | Color}`;

export type FontOp = `font-${
  | keyof typeof FontWeightMap
  | keyof Theme["fonts"]}`;

export type ItalicOp = "italic" | "non-italic";

export type TrackingOp = `tracking-${keyof typeof TrackingMap}`;

export type LeadingOp = `tracking-${keyof typeof LeadingMap}`;

export type TransformOp = keyof typeof TextTransformMap;

export type UnderlineOp =
  | keyof typeof TextDecorationLineMap
  | `underline-${keyof typeof TextDecorationStyleMap | Color}`;

export type TintOp = `tint-${Color}`;

export type OverlayOp = `overlay-${Color}`;

export type Op =
  | MPTBLRSEOp
  | HWOp
  | OverflowOp
  | HiddenOp
  | FlexOp
  | SelfOp
  | ItemsOp
  | ContentOp
  | JustifyOp
  | BGOp
  | OpacityOp
  | BorderOp
  | RoundedOp
  | PositionOp
  | ZOp
  | ShadowOp
  | AspectOp
  | LTRRTLOp
  | TextOp
  | FontOp
  | ItalicOp
  | TrackingOp
  | LeadingOp
  | TransformOp
  | UnderlineOp
  | TintOp
  | OverlayOp;
