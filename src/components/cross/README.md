# React Delete Icon

A simple circle with a cross for React

## Table of contents

- [Installation](#installation)
- [Usage](#usage)

# Installation

```
npm i @shapla/react-components
```

# Usage

### Styles

with SCSS:

```scss
// Add the following line at top of your scss file
@use "@shapla/react-components/src/index.scss" as shapla;

@include shapla.delete-icon;
```

### Javascript Instantiation

```js
import React from "react";
import { Cross } from "@shapla/react-components";

class MyApp extends React.Component {
  render() {
    return (
      <Cross size="small" onClick={this.handleClick}>
        Click Me
      </Cross>
    );
  }
  handleClick() {
    console.log("Button clicked!");
  }
}
```

### Props

| Property    | Type   | Required | Default  | Description                                              |
| ----------- | ------ | -------- | -------- | -------------------------------------------------------- |
| `size`      | String | **no**   | `normal` | Value can be `normal` or `small` or `medium` or `large`. |
| `ariaLabel` | String | **no**   | `close`  | Value for html `aria-label` attribute                    |
