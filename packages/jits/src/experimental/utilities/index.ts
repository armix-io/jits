import { createUtility } from "../create-utility";
import scale from "./scale";

const hidden = createUtility({
  args: ["hidden"],
  build: { display: "hidden" },
});

const w = createUtility({
  args: ["w", [...Object.keys(scale), "[]"]],
  build: ([, s]) => ({
    width: scale[s as keyof typeof scale]?.px ?? parseInt(s, 10),
  }),
});

export default [hidden, w];
