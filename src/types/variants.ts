import { Config } from "./config";

export type CustomVariant = "Variants" extends keyof Config
  ? Config["Variants"]
  : never;

export type StateVariant =
  | "active"
  | "focus"
  | "disabled"
  | "checked"
  | "first"
  | "last"
  | "odd"
  | "even"
  | CustomVariant;

// TODO: add ios/android context variants for platform specific styles
export type ContextVariant = "dark";
