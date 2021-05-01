import { Config } from "../jits";
import { AST } from "./get-ast";

import {
  UtilitySchema,
  // utilities
  AbsoluteRelative,
  Aspect,
  Bg,
  Border,
  Content,
  Flex,
  Font,
  HeightWidth,
  Hidden,
  Italic,
  Items,
  Justify,
  Leading,
  LtrRtl,
  MarginPadding,
  Opacity,
  Overflow,
  Overlay,
  Rounded,
  Self,
  Shadow,
  Text,
  TextDecoration,
  TextTransform,
  Tint,
  TopRightBottomLeftInset,
  Tracking,
  Z,
} from "../utilities";

const utilities: UtilitySchema[] = [
  AbsoluteRelative,
  Aspect,
  Bg,
  Border,
  Content,
  Flex,
  Font,
  HeightWidth,
  Hidden,
  Italic,
  Items,
  Justify,
  Leading,
  LtrRtl,
  MarginPadding,
  Opacity,
  Overflow,
  Overlay,
  Rounded,
  Self,
  Shadow,
  Text,
  TextDecoration,
  TextTransform,
  Tint,
  TopRightBottomLeftInset,
  Tracking,
  Z,
];

export const getAstStyle = (config: Config) => (ast: AST) => {
  const { op, value: $value } = ast;

  const requiresValue = () => new Error(`requires value, ${ast.__utility}`);
  const invalidValue = () =>
    new Error(`invalid value '${$value}', ${ast.__utility}`);
  const invalidOp = () => new Error(`invalid op '${op}', ${ast.__utility}`);

  const context = { ast, config, requiresValue, invalidValue, invalidOp };

  for (const utility of utilities) {
    if (utility.test ? utility.test(op) : utility.ops.includes(op)) {
      return utility.parse(context);
    }
  }

  return invalidOp();
};
