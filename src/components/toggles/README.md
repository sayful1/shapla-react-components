# Shapla Toggles

A simple accordion/toggle component for React

## Table of contents

- [Installation](#installation)
- [Usage](#usage)

# Installation

```
npm install --save @shapla/react-components
```

# Usage

### Styles (with SCSS)

```scss
@use "@shapla/vue-components/src/index.scss" as shapla;

@include shapla.toggles;
```

### Javascript Instantiation

```jsx
import { ShaplaToggles, ShaplaToggle } from "@shapla/vue-components";

export default () => {
  return (
    <Toggles>
      <Toggle name="Toggle 1" subtext="Toggle 1 subtitle">
        <p>Toggle 1 content</p>
      </Toggle>
      <Toggle name="Toggle 2" subtext="Toggle 2 subtitle">
        <p>Toggle 2 content</p>
      </Toggle>
      <Toggle name="Toggle 3" subtext="Toggle 3 subtitle">
        <p>Toggle 3 content</p>
      </Toggle>
    </Toggles>
  );
};
```

### Props for `ShaplaToggles`

| Property       | Type    | Required | Default | Description                                                                                        |
| -------------- | ------- | -------- | ------- | -------------------------------------------------------------------------------------------------- |
| `accordion`    | Boolean | **no**   | `true`  | If you set `false`. All toggle components can be opened. Otherwise opening one will close another. |
| `iconPosition` | String  | **no**   | `left`  | Value can be `left` or `right`.                                                                    |
| `boxedMode`    | Boolean | **no**   | `true`  | Set `false` if you don't want border on all side.                                                  |
| `showDivider`  | Boolean | **no**   | `true`  | Only works when `boxedMode` is `false`. Remove all borders.                                        |

### Props for `ShaplaToggle`

| Property   | Type    | Required | Default | Description                              |
| ---------- | ------- | -------- | ------- | ---------------------------------------- |
| `name`     | String  | **yes**  | `true`  | Toggle title.                            |
| `subtext`  | String  | **yes**  | `true`  | Toggle subtitle.                         |
| `selected` | Boolean | **no**   | `false` | Set true if you to keep open by default. |
