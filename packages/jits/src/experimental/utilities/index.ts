import { createUtility } from "../create-utility";
import scale from "./scale";

const position = createUtility({
  args: [["absolute", "relative"]],
  build: ([position]) => ({ position }),
});

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

export default [position, hidden, w];
