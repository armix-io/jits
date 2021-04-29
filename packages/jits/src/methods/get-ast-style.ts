import { AST } from "./get-ast";
import { Options } from "../types";

import {
  Utility,
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

const utilities: Utility[] = [
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

export const getAstStyle = (options: Options) => (ast: AST) => {
  const { op, value: $value } = ast;

  const requiresValue = () => new Error(`requires value, ${ast.__function}`);
  const invalidValue = () =>
    new Error(`invalid value '${$value}', ${ast.__function}`);
  const invalidOp = () => new Error(`invalid op '${op}', ${ast.__function}`);

  const context = { requiresValue, invalidValue, invalidOp };

  for (const utility of utilities) {
    if (utility.test ? utility.test(op) : utility.ops.includes(op)) {
      return utility.parse(options, context)(ast);
    }
  }

  return invalidOp();
};
