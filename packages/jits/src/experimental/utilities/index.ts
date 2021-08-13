import { Utility } from "../types";
import scale from "./scale";

const hidden: Utility = {
  args: ["hidden"],
  build: { display: "hidden" },
};

const w: Utility = {
  args: ["w", [...Object.keys(scale), "[]"]],
  build: ([, s]) => ({
    width: scale[s as keyof typeof scale]?.px ?? parseInt(s, 10),
  }),
};

export default [hidden, w];
