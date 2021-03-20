import { Style, StyleType } from "./types";

const reTextProps = /^(color|(font(Family|Size|Style|Weight|Variant))|includeFontPadding|letterSpacing|lineHeight|(text(Transform|(Align(Vertical)?)|(Decoration(Color|Line|Style)?)|(Shadow(Color|Offset|Radius)?)?))|writingDirection)$/;
const reImageProps = /^(resizeMode|tintColor|overlayColor)$/;

export const getTypeGroups = (style: Style) => {
  const groups: Record<StyleType, Style> = { view: {}, text: {}, image: {} };
  const keys = Object.keys(style);
  keys.forEach((key) => {
    const target = key.match(reTextProps)
      ? groups.text
      : key.match(reImageProps)
      ? groups.image
      : groups.view;
    Object.assign(target, { [key]: style[key as keyof typeof style] });
  });
  return groups;
};
