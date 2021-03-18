import { Style } from "./types";

export const getMergedStyleProp = <T extends {}>(
  ...args: (T | undefined | (T | undefined)[])[]
) => {
  const obj: Style = {};
  args.forEach((arg) =>
    Object.assign(obj, ...(Array.isArray(arg) ? arg : [arg]))
  );
  return obj;
};
