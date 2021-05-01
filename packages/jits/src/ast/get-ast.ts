const ops = [
  // margin/padding/height/width
  "(?:m|p)(\\w*)",
  "top|bottom|left|right|start|end",
  "h|w",
  // display
  "overflow",
  "hidden|flex(?:-(?:row|col|grow|shrink|wrap|nowrap))?",
  // flex utilities
  "self|items|content|justify",
  // view
  "bg",
  "opacity",
  "border(?:-opacity)?",
  "rounded",
  "absolute|relative",
  "z",
  "shadow",
  "aspect",
  "ltr|rtl",
  // text
  "text",
  "font",
  "italic|non-italic",
  "tracking",
  "leading",
  "uppercase|lowercase|capitalize|normal-case",
  "underline|line-through|no-underline",
  // image
  "tint",
  "overlay",
];

/**
 * split function into 5 groups if match
 * - (1) sign (if negative value, i.e. -mx-2 then value is "-2")
 * - (2) op (may include target suffix if "m" or "p" etc.)
 * - (3) target (if part of op) (i.e. if mx, then target is "x")
 * - (4) target (if seperate from op) (i.e. if border-t, then target is "t")
 * - (5) value (if given) (i.e. if border-red-500, then "red-500")
 */
const reOpTargetValue = new RegExp(
  `^(-)?(${ops.join(
    "|"
  )})(?:-((?:(?:t|b)?(?:l|r|s|e)?|x|y)))?(?:-(.*(?:-.*)*)+)?$`
);

export function getAst(utility: string) {
  const matchOpTargetValue = utility.match(reOpTargetValue);
  if (!matchOpTargetValue) {
    throw new Error(`invalid function '${utility}'`);
  }

  const [, $sign, $op, $optarget, $target, $value] = matchOpTargetValue;

  // remove $optarget from $op if exists
  const op = $optarget ? $op.substring(0, $op.length - $optarget.length) : $op;

  const target = $optarget || $target || undefined;

  const value = $value ? `${$sign || ""}${$value}` : undefined;

  return {
    op,
    target,
    value,
    __utility: utility,
  };
}

export type AST = ReturnType<typeof getAst>;
