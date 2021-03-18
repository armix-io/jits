import { ViewStyle, TextStyle, ImageStyle } from "react-native";

export type Style = ViewStyle & TextStyle & ImageStyle;

export type StyleType = "view" | "text" | "image";
