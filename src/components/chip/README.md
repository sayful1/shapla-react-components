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

@include shapla.chip;
```

### Javascript Instantiation

```js
import React from "react";
import {Chip} from "@shapla/react-components";

class MyApp extends React.Component {
  render() {
    return (
      <Chip
        text="Sayful Islam"
        deletable={true}
        onDeleteIconClick={() => console.log("delete")}
      />
    );
  }
}
```

### Props

| Property            | Type    | Required | Default | Description                              |
|---------------------|---------|----------|---------|------------------------------------------|
| `text`              | String  | **no**   | ``      | Chip text                                |
| `imageSrc`          | String  | **no**   | ``      | Chip contact image url                   |
| `deletable`         | Boolean | **no**   | `false` | If set `true`, Delete icon will appear   |
| `small`             | Boolean | **no**   | `false` | If set `true`, a small chip with display |
| `height`            | String  | **no**   | `32px`  | Custom height of chip                    |
| `onDeleteIconClick` | String  | **no**   | `32px`  | Trigger when you click on delete icon.   |
