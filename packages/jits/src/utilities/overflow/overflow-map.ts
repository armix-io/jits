export type OverflowMap = Record<"visible" | "hidden" | "scroll", string>;

export const defaultOverflowMap: OverflowMap = {
  visible: "visible",
  hidden: "hidden",
  scroll: "scroll",
};
