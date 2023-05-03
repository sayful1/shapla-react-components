# Shapla Tabs

A simple responsive horizontal navigation tabs component based on Bulma Tabs for React

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
@use "@shapla/react-components/src/index.scss" as shapla;

@include shapla.tabs;
```

### Javascript Instantiation

```jsx
import { ShaplaTabs, ShaplaTab } from "@shapla/react-components";
export default () => {
  return (
    <ShaplaTabs fullwidth>
      <ShaplaTab name="Tab 1" selected>
        {" "}
        Tab One Content{" "}
      </ShaplaTab>
      <ShaplaTab name="Tab 2"> Tab Two Content </ShaplaTab>
    </ShaplaTabs>
  );
};
```

```


```

### Props for `ShaplaTabs`

| Property    | Type    | Required | Default   | Description                                                      |
| ----------- | ------- | -------- | --------- | ---------------------------------------------------------------- |
| `alignment` | String  | **no**   | `left`    | Possible value can be `left`, `center` or `right`.               |
| `size`      | String  | **no**   | `default` | Possible value can be `default`, `small`, `medium` or `large`.   |
| `tabStyle`  | String  | **no**   | `default` | Possible value can be `default`, `boxed`, `rounded` or `toggle`. |
| `fullwidth` | Boolean | **no**   | `false`   | If set `true`, the tabs will take up available full width.       |

### Props for `ShaplaTab`

| Property   | Type    | Required | Default | Description                              |
| ---------- | ------- | -------- | ------- | ---------------------------------------- |
| `name`     | String  | **yes**  | `true`  | Tab title.                               |
| `selected` | Boolean | **no**   | `false` | Set true if you to keep open by default. |
