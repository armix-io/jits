import { Platform, PixelRatio } from "react-native";

export const rem = (value: number) =>
  Platform.select<string | number>({
    web: `${value}rem`,
    default: PixelRatio.getFontScale() * 14 * value,
  });
