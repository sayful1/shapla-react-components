# Shapla React Columns

A simple way to build responsive columns for React

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

@include shapla.columns;
```

### Javascript Instantiation

```js
import React from "react";
import {Columns, Column} from "@shapla/react-components";

class MyApp extends React.Component {
  render() {
    return (
      <Columns>
        <Column>
          <div className="card-column-box">Column example 1</div>
        </Column>
        <Column>
          <div className="card-column-box">Column example 2</div>
        </Column>
        <Column>
          <div className="card-column-box">Column example 3</div>
        </Column>
        <Column>
          <div className="card-column-box">Column example 4</div>
        </Column>
      </Columns>
    );
  }
}
```

### Props for `Columns`

| Property    | Type    | Required | Default   | Description                                                                                                                                                                                                                    |
|-------------|---------|----------|-----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `multiline` | Boolean | **no**   | `false`   | Whenever you want to start a new line, you can also add the `multiline` property and add more column elements than would fit in a single row                                                                                   |
| `centered`  | Boolean | **no**   | `false`   | For centering columns, you can add the `centered` property                                                                                                                                                                     |
| `vcentered` | Boolean | **no**   | `false`   | To align your columns vertically, add the `vcentered` property to the columns container.                                                                                                                                       |
| `gapless`   | Boolean | **no**   | `false`   | There is 1.5rem gap between columns by default. If you want to remove the space between the columns, add the `gapless` property on the columns container                                                                       |
| `mobile`    | Boolean | **no**   | `false`   | By default, columns are only activated from tablet onwards. This means columns are stacked on top of each other on mobile. If you want columns to work on mobile too, just add the `mobile` property on the columns container. |
| `desktop`   | Boolean | **no**   | `false`   | If you only want columns on desktop upwards, just use the `desktop` property on the columns container.                                                                                                                         |
| `columnGap` | String  | **no**   | `0.75rem` | If you want to use custom column gap, you can change this value                                                                                                                                                                |

### Props for `Column`

If you want to change the size of a single column, you can use one of the following props
Each props can take value from 1 to 12 as it 12 columns grid system.

| Property     | Type   | Required | Default | Description                                      |
|--------------|--------|----------|---------|--------------------------------------------------|
| `mobile`     | Number | **no**   | `null`  | When screen size less than 769px.                |
| `tablet`     | Number | **no**   | `null`  | When screen size (greater than/equal to) 769px.  |
| `desktop`    | Number | **no**   | `null`  | When screen size (greater than/equal to) 1088px. |
| `widescreen` | Number | **no**   | `null`  | When screen size (greater than/equal to) 1280px. |
| `fullhd`     | Number | **no**   | `null`  | When screen size (greater than/equal to) 1472px. |
