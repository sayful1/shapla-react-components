# Shapla React Button

A simple button, in different colors, sizes, and states

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

@include shapla.button;
```

### Javascript Instantiation

```js
import React, { Component } from "react";
import { Button } from "@shapla/react-components";

class MyApp extends Component {
  render() {
    return <Button theme="primary">Click Me!</Button>;
  }
}
```

### Props

| Property    | Type    | Required | Default   | Description                                              |
| ----------- | ------- | -------- | --------- | -------------------------------------------------------- |
| `theme`     | String  | **no**   | `default` | Value can be `default` or `primary` or `secondary`.      |
| `size`      | String  | **no**   | `normal`  | Value can be `normal` or `small` or `medium` or `large`. |
| `fullwidth` | Boolean | **no**   | `false`   | If set `true`, button will take full width.              |
| `disabled`  | Boolean | **no**   | `false`   | If set `true`, disabled attribute will be added.         |
| `outline`   | Boolean | **no**   | `false`   | If set `true`, outline style will be used.               |
| `rounded`   | Boolean | **no**   | `false`   | If set `true`, rounded style will be used.               |
| `fab`       | Boolean | **no**   | `false`   | If set `true`, circle style will be used.                |
| `shadow`    | Boolean | **no**   | `false`   | If set `true`, box-shadow will be added around button.   |
| `loading`   | Boolean | **no**   | `false`   | If set `true`, a loading icon will be shown.             |
