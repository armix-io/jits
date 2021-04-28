# `jits`

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

`jits` (**Just-In-Time Styles**) is a small and simple styling utility (inspired by TailwindCSS) to produce CSS-compatible style objects, designed to enable utility-based styling for non-CSS runtimes (like React Native).

- Supports TypeScript for autocompletion of utilities and variants.
- Supports "dark"-mode variant by default.
- Supports custom theming colors.
- Supports custom defined environment and state variants.
- Supports memoisation by default for performance.

## Integrations

Integrations enable you to easily define, access, and control style environments with your UI framework.

### Official Integrations

- React — [@armix/jits-react](../jits-react)

  - toggle "dark"-mode via. a React Context (`JITSProvider`),
  - access a context-aware `jits` via hooks (`useJits`),

- React Native — [@armix/jits-react-native](../jits-react-native)

  - wrapped `View` component (to automatically map `elevation` properties for shadows),
  - wrapped `Pressable` component (to automatically map `active` variant styles).

## Installation

```shell
yarn add @armix/jits

# + React
yarn add @armix/jits-react

# + React Native
yarn add @armix/jits-react-native
```

## Usage

```typescript
import { jits } from "@armix/jits";
```

### Simple Utilities

```typescript
jits(["text-lg"]);
// { root: { fontSize: 15.75 } }

jits(["bg-red-500"]);
// { root: { backgroundColor: "#ef4444" } }
```

### State & Environment Variants

```typescript
jits(["uppercase", ["hover", "text-blue-500"]]);
// {
//   root: { textTransform: "uppercase" },
//   hover: { color: "#3b82f6" },
// }

jits(["uppercase", ["hover", ["text-blue-500", "underline"]]]);
// {
//   root: { textTransform: "uppercase" },
//   hover: { color: "#3b82f6", textDecoration: "underline" },
// }

jits(
  [
    "uppercase",
    ["dark", "lowercase"],
    ["hover", "text-blue-500"],
    ["hover", "dark", "text-white"],
  ],
  {
    dark: true, // use dark (environment variant) for overrides
  }
);
// {
//   root: { textTransform: "lowercase" },
//   hover: { color: "#ffffff" },
// }
```

### Custom Configuration

```typescript
import { createJits } from "@armix/jits";

export const jits = createJits({
  // define custom environment variants
  envs: ["dark", "danger"],
  // define custom state variants
  states: ["hover", "rotated"],
});

jits(
  [
    "text-black",
    ["danger", "text-red-500"],
    ["rotated", ["border-b-2", "border-b-red-500"]],
  ],
  {
    danger: true,
  }
);
// {
//   root: { color: "#ef4444" },
//   rotated: { borderBottomWidth: 2, borderBottomColor: "#ef4444" }
// }
```
