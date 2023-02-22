# Shapla React Spinner

A loading spinner component based on Material Design Lite Spinner for React

## Table of contents

- [Installation](#installation)
- [Usage](#usage)

# Installation

```
npm install --save @shapla/react-spinner
```

# Usage

### Styles

with Sass:

```js
import "@shapla/react-spinner/src/index.scss";
```

with CSS:

```js
import "@shapla/react-spinner/dist/spinner.css";
```

### Javascript Instantiation

```js
import React from "react";
import Spinner from "@shapla/react-spinner";

class MyApp extends React.Component {
  render() {
    return <Spinner active={this.state.active} single={true} showText={true} />;
  }
}
```

### Props

| Property      | Type    | Required | Default      | Description                                                     |
| ------------- | ------- | -------- | ------------ | --------------------------------------------------------------- |
| `active`      | Boolean | **no**   | `true`       | Spinner will be shown only when `active` value is `true`        |
| `single`      | Boolean | **no**   | `false`      | If set `true`, only primary color will be shown for all layers. |
| `showText`    | Boolean | **no**   | `false`      | If set `true`, `Loading...` text will be show beside spinner.   |
| `loadingText` | String  | **no**   | `Loading...` | Loading text                                                    |
| `position`    | String  | **no**   | `fixed`      | Value can be `fixed`, `absolute`, or `static`.                  |
| `size`        | String  | **no**   | `default`    | Value can be `default`, `small`, or `medium` or `large`.        |
