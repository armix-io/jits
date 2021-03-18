import { Config } from "./config";

export type CustomVariant = "Variants" extends keyof Config
  ? Config["Variants"]
  : never;

export type StateVariant =
  | "active"
  | "focus"
  | "disabled"
  | "checked"
  | CustomVariant;

export type ContextVariant = "dark";
