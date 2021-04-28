import { PixelRatio } from "react-native";

export const rem = (value: number) => PixelRatio.getFontScale() * 14 * value;
