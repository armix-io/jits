import { createUtility } from "../create-utility";
import { colorMap, colorAliases, colorSets, colorUnits } from "./color";
import { spacing } from "./spacing";

const position = createUtility({
  args: [["absolute", "relative"]],
  build: ([position]) => ({ position }),
});

const hidden = createUtility({
  args: ["hidden"],
  build: { display: "hidden" },
});

const size = createUtility({
  args: [
    ["w", "h"],
    [...Object.keys(spacing), "[]"],
  ],
  build: ([, s]) => ({
    width: spacing[s as keyof typeof spacing]?.px ?? parseInt(s, 10),
  }),
});

const color = createUtility({
  args: new Set([
    [
      ["text", "bg"],
      [...colorAliases, "[]"],
    ],
    [["text", "bg"], [...colorSets], [...colorUnits]],
  ]),
  build: ([operator, nameOrValue, scaleOrUndefined]) => {
    const target = operator === "text" ? "color" : "backgroundColor";

    const isAlias = colorAliases.includes(nameOrValue as any);
    if (isAlias) {
      return { [target]: colorMap[nameOrValue as typeof colorAliases[number]] };
    }
    const isSet =
      colorSets.includes(nameOrValue as any) &&
      colorUnits.includes(scaleOrUndefined as any);
    if (isSet) {
      return {
        [target]:
          colorMap[nameOrValue as typeof colorSets[number]][
            scaleOrUndefined as typeof colorUnits[number]
          ],
      };
    }
    return { [target]: nameOrValue };
  },
});

export default [position, hidden, size, color];
