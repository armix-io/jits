import { ContextVariant, Instruction, StateVariant } from "./types";

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

/**
 * contexts are in-built features
 * any decorator that is not a context is a state
 */
const matchContexts = ["dark", "ios", "android"];

export function getAst(instruction: Instruction) {
  let fn: RegExpMatchArray | null = null;
  const decorators: (ContextVariant | StateVariant)[] = [];

  if (typeof instruction === "string") {
    const matchOpTargetValue = instruction.match(reOpTargetValue);
    fn = matchOpTargetValue;
  } else {
    fn = instruction;

    instruction.forEach((item) => {
      const matchOpTargetValue = item.match(reOpTargetValue);
      if (matchOpTargetValue) {
        fn = matchOpTargetValue;
      } else {
        decorators.push(item as ContextVariant | StateVariant);
      }
    });
  }

  if (!fn) {
    throw new Error(
      `invalid instruction, ${
        typeof instruction === "string" ? instruction : instruction.join(",")
      }`
    );
  }

  const [, $sign, $op, $optarget, $target, $value] = fn;

  // remove $optarget from $op if exists
  const op = $optarget ? $op.substring(0, $op.length - $optarget.length) : $op;

  const target = $optarget || $target || undefined;

  const value = $value ? `${$sign || ""}${$value}` : undefined;

  const states: StateVariant[] = [];

  const contexts: ContextVariant[] = [];

  for (const decorator of decorators) {
    if (matchContexts.includes(decorator)) {
      contexts.push(decorator as ContextVariant);
    } else {
      states.push(decorator as StateVariant);
    }
  }

  return {
    op,
    target,
    value,
    states,
    contexts,
    __function: fn,
    __instruction: instruction,
  };
}

export type AST = ReturnType<typeof getAst>;
