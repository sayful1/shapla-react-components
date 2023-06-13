# Shapla Radio Button

A custom buttons group component that works like native radio.

## Table of contents

- [Installation](#installation)
- [Usage](#usage)

# Installation

```
npm install --save @shapla/react-components
```

# Usage

Add the component:

```jsx
import { RadioButton } from "@shapla/vue-components";
import { useState } from "react";

export default () => {
  const [option, setOption] = useState("one");
  const options = [
    { label: "One", value: "one" },
    { label: "Two", value: "two" },
    { label: "Three", value: "three" },
  ];
  return (
    <>
      {options.map((_option) => (
        <RadioButton
          key={_option.value}
          value={_option.value}
          label={_option.label}
          shadow={_option.label === option}
        >
          {_option.label}
        </RadioButton>
      ))}
    </>
  );
};
```

### Props

| Property    | Type     | Required | Default    | Description                                                            |
| ----------- | -------- | -------- | ---------- | ---------------------------------------------------------------------- |
| `label`     | String   | **no**   | ``         | Radio label                                                            |
| `value`     | String   | **no**   | ``         | Radio value                                                            |
| `shadow`    | Boolean  | **no**   | `false`    | Shadow effect                                                          |
| `rounded`   | Boolean  | **no**   | `false`    | Rounded effect                                                         |
| `fullWidth` | Boolean  | **no**   | `false`    | Full width effect                                                      |
| `size`      | String   | **no**   | `default`  | Size of the radio button. Can be `small`,`normal`, `medium` or `large` |
| `theme`     | String   | **no**   | `default`  | Theme of the radio button. Can be `default` or `primary`               |
| `modaValue` | String   | **no**   | `default`  | Radio button value                                                     |
| `onChange`  | Function | **no**   | `() => {}` | Event handler for change event                                         |
