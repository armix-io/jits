# `jits-react`

## Usage

### Dark Mode (Togglable)

A very typical use case is implementing a togglable dark mode for your styling.
By importing `JitsProvider` you can add your own `envs` keywords to the config
object, and/or provide new `options` default for `jits` as exposed by `useJits`.

```jsx
// App.tsx (root)

import React from "react";
import { JitsProvider } from "@armix/jits-react";

const envs = ["dark"] as const;

const App: React.FC = () => {
  const [darkMode, setDarkMode] = React.useState(false);

  return (
    <JitsProvider config={{ envs }} defaultOptions={{ dark: darkMode }}>
      ...
    </JitsProvider>
  )
}

// Component.tsx (child)

import React from "react";
import { useJits } from "@armix/jits-react";

const Component: React.FC = () => {
  const jits = useJits();

  // notice we don't have to provide { dark: true } as an option
  const style = jits(["text-black", ["dark", "text-white"]]);

  // still can pass options if you want, will merge over current defaults
  const foo = jits(["text-black", ["dark", "text-white"]], { dark: false });

  return (
    // style.root will be { color: "white" } because of `dark` in context
    <div style={style.root}>
      ...
    </div>
  )
}
```

### Nesting Providers

You may want to "undo" a change of a parent provider, such as switch off dark
mode for a child deep within an overall dark mode UI. You can simply use another
`JitsProvider` at the level you want. Nested providers will merge it parent's
options with the new defaultOptions passed into the provider.

```jsx
import React from "react";
import { JitsProvider } from "@armix/jits-react";

const Component: React.FC = () => {
  return (
    <JitsProvider defaultOptions={{ dark: true, foo: true }}>
      // dark = true, foo = true
      <div>
        <JitsProvider defaultOptions={{ dark: false }}>
          // dark = false, foo = true
          ...
        <JitsProvider />
      </div>
      ...
    <JitsProvider />
  )
}
```

### Cascading Options

You may have noticed that we can pass options into `jits` in many different
places:

- JitsProvider, via `defaultOptions`
- useJits, via the first arg `defaultOptions`
- jits (as returned by `useJits`), via the second `options` argument.
