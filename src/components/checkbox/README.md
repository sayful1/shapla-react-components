# Shapla React Checkbox

A custom checkbox for React that exactly work same way as native checkbox

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
@use "@shapla/react-components/src/index.scss" as shapla with (
  $checkbox-image-path: "shapla-css/src/form/checkbox"
);

@include shapla.checkbox;
```

### Javascript Instantiation

```js
import React, { Component } from "react";
import { Checkbox } from "@shapla/react-components";

class MyApp extends Component {
  render() {
    return (
      <Checkbox
        name="_acceptance"
        value="yes"
        label="You must accept our terms and conditions."
        checked={true}
      />
    );
  }
}
```

### Props

| Property   | Type    | Required | Default | Description                                        |
| ---------- | ------- | -------- | ------- | -------------------------------------------------- |
| `value`    | String  | **no**   | `yes`   | The default value for the checkbox                 |
| `label`    | String  | **no**   | ``      | Checkbox label                                     |
| `disabled` | Boolean | **no**   | `false` | If set `true`, Checkbox will be disabled to check. |
| `checked`  | Boolean | **no**   | `false` | If set `true`, Checkbox will be checked.           |
