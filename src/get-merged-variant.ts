import { StateVariant, StyleType } from "./types";
import { RNTWRoot, RNTWNode } from "./rntw";

export const getMergedVariant = (
  root: RNTWRoot,
  variant: StateVariant | undefined
) => {
  const obj: RNTWNode = {
    style: { ...root["style"] },
    view: { ...root["view"] },
    text: { ...root["text"] },
    image: { ...root["image"] },
  };
  (Object.keys(obj) as StyleType[]).forEach((type) => {
    Object.assign(obj[type], variant ? root[variant]?.[type] : undefined);
  });
  return obj;
};
