import { AbsoluteRelative } from "./absolute-relative";
import { Aspect } from "./aspect";
import { Bg } from "./bg";
import { Border } from "./border";
import { Content } from "./content";
import { Flex } from "./flex";
import { Font } from "./font";
import { HeightWidth } from "./height-width";
import { Hidden } from "./hidden";
import { Italic } from "./italic";
import { Items } from "./items";
import { Justify } from "./justify";
import { Leading } from "./leading";
import { LtrRtl } from "./ltr-rtl";
import { MarginPadding } from "./margin-padding";
import { Opacity } from "./opacity";
import { Overflow } from "./overflow";
import { Overlay } from "./overlay";
import { Rounded } from "./rounded";
import { Self } from "./self";
import { Shadow } from "./shadow";
import { Text } from "./text";
import { TextDecoration } from "./text-decoration";
import { TextTransform } from "./text-transform";
import { Tint } from "./tint";
import { TopRightBottomLeftInset } from "./top-right-bottom-left-inset";
import { Tracking } from "./tracking";
import { Z } from "./z";

export type Utility =
  | AbsoluteRelative.Utility
  | Aspect.Utility
  | Bg.Utility
  | Border.Utility
  | Content.Utility
  | Flex.Utility
  | Font.Utility
  | HeightWidth.Utility
  | Hidden.Utility
  | Italic.Utility
  | Items.Utility
  | Justify.Utility
  | Leading.Utility
  | LtrRtl.Utility
  | MarginPadding.Utility
  | Opacity.Utility
  | Overflow.Utility
  | Overlay.Utility
  | Rounded.Utility
  | Self.Utility
  | Shadow.Utility
  | Text.Utility
  | TextDecoration.Utility
  | TextTransform.Utility
  | Tint.Utility
  | TopRightBottomLeftInset.Utility
  | Tracking.Utility
  | Z.Utility;
